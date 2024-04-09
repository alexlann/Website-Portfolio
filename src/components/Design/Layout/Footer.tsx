export default function Footer() {
  return (
    <div className="absolute bottom-0 left-0 bg-green w-full text-center py-2 text-white">
      <p>
        &copy; { new Date().getFullYear() } - Alexander Lannoy
      </p>
    </div>
  )
}
