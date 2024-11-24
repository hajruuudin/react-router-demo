import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Root, {loader as rootLoader, action as rootAction} from './routes/root';
import ErrorPage from './error-page';
import './index.css'
import Contact, { loader as contactLoader } from './routes/contact';
import EditContact, {action as editAction} from './routes/edit';
import { action as destroyContact } from './routes/delete';
import Index from './routes/index';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index /> },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: `contacts/:contactId/edit`,
        element: <EditContact/>,
        action: editAction,
        loader: contactLoader
      },
      {
        path: `contacts/:contactId/destroy`,
        action: destroyContact,
        errorElement: <div>Oops! There was an error.</div>,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
