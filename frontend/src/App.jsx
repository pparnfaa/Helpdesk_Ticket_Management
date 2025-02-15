import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Ticket from "./pages/Ticket";
import CreateTicket from "./pages/CreateTicket";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route>
        <Route index element={<Ticket />}/>
        <Route path="create-ticket" element={<CreateTicket />}/>
      </Route>
      
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App;
