export default function Footer() {
  
  return (
    <>
        <footer class="text-center text-white bg-dark">
            <div class="container p-2">
                <a href="instagram.com"><i class="bi bi-instagram me-3 text-light fs-4"></i></a>
                <a href="facebook.com" ><i class="bi bi-facebook  me-0 text-light fs-4"></i></a>
            </div>
            <div class="text-center" style={{"background-color": "rgba(0, 0, 0, 0.2);"}}>
            © 2020 Copyright: <a class="navbar-brand text-warning fs-4 fst-italic" href="#">Chama.<span className='fs-6'>Store</span></a>
            </div>
        </footer>
    </>
  )
}
