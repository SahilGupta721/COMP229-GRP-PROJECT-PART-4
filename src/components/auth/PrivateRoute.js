/*
Web App Name = SELL USED PRODUCTS SITE

Description = Motive of this full-stack application is to allow users to perform CRUD operations on Advertisements related to any product, also users can post and see questions and answers.

GROUP-2, ELITES
SAHIL GUPTA(Product Manager)
Student_Id = 301436261
MICHAEL ASFEHA(Senior Software Engineer)
Student_Id = 301411864
*/

import { useLocation, Navigate   } from 'react-router-dom'
import { isAuthenticated } from './auth-helper'

function PrivateRoute({ children }){

    let location = useLocation();

    if(!isAuthenticated()){
        return <Navigate to="/users/signin" state={{ from: location.pathname}} />
    }

    return children
}

export default PrivateRoute