import { Fragment } from 'react'; // Fragment: component chứa ko sinh ra thẻ thật trong dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        // const Layout = route.layout === null ? Fragment : DefaultLayout;
                        // nếu ko có layout thì dùng Fragment, ngược lại lấy DefaultLayout

                        // let Layout = DefaultLayout;

                        // if ( route.layout === null ) {
                        //     Layout = Fragment; // nếu ko có layout thì dùng Fragment
                        // } else {
                        //     layout = route.layout; // nếu có layout thì lấy layout đó
                        // }

                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout; // nếu có layout thì lấy layout đấy
                        } else if (route.layout === null) {
                            Layout = Fragment; // nếu ko có layout thì lấy Fragment chứa
                        }

                        const Page = route.component;
                        // tạo JSX element Page tượng trưng cho route.component để dùng trong prop element
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
