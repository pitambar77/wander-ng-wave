import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../pages/home/Home'
import About from '../pages/miniPages/About';
import PrivacyPolicy from '../pages/miniPages/PrivacyPolicy';
import ContactUs from '../pages/miniPages/ContactUs';
import SingleBlog from '../pages/blogs/singleBlog/SingleBlog';
import Login from '../pages/user/Login';
import Register from '../pages/user/Register';
import AdminLayout from '../pages/admin/AdminLayout';
import Dashbord from '../pages/admin/dashbord/Dashbord';
import AddPost from '../pages/admin/post/AddPost';
import ManagePost from '../pages/admin/post/ManagePost';
import ManageUser from '../pages/admin/user/ManageUser';
import PrivateRouter from './PrivateRouter';
import UpdatePost from '../pages/admin/post/UpdatePost';


const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/about-us",
                element:<About/>
            },
            {
                path:"/privacy-policy",
                element:<PrivacyPolicy/>
            },
            {
                path:"/contact-us",
                element:<ContactUs/>
            },
            {
                path:"blogs/:id",
                element:<SingleBlog/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/dashbord",
                element:<PrivateRouter><AdminLayout/></PrivateRouter>, // it will be protected by the admin
                children:[
                    {
                        path:'',
                        element:<Dashbord/>
                    },
                    {
                        path:'add-new-post',
                        element:<AddPost/>,
                    },
                    {
                        path:'manage-items',
                        element:<ManagePost/>,
                    },
                    {
                        path:'users',
                        element:<ManageUser/>,
                    },
                    {
                        path:'update-items/:id',
                        element:<UpdatePost/>,
                    },
                ]
            }
        ]
    },
]);

export default router;