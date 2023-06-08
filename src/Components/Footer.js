export default function Footer() {
  var dt = new Date();
  var yr = dt.getFullYear();
  return (
    <footer>
      &copy; <a href="">Swarup Vishwas</a> {yr}
    </footer>
  );
}
