const productos = [
  {
    nombre: "Jabón de Ropa Urca 3L Lavanda",
    descripcion: "Producto de muy buena calidad.",
    precio: "$260",
    imagen: "foto1.png"
  },
  {
    nombre: "Jabón de Ropa Urca 3L Clásico verde",
    descripcion: "Producto de muy buena calidad.",
    precio: "$260",
    imagen: "foto2.png"
  },
    {
    nombre: "Jabón de Ropa Urca 3L Clásico azul",
    descripcion: "Producto de muy buena calidad.",
    precio: "$260",
    imagen: "foto3.jpeg"
  },
  
   {
    nombre: "Suavizante URCA 2L ROJO",
    descripcion: "Buena calidad y muy ricas fragancias",
    precio: "$120",
    imagen: "foto7.jpg"
  },
   {
    nombre: "Suavizante URCA 2L CELESTE",
    descripcion: "Buena calidad y muy ricas fragancias",
    precio: "$120",
    imagen: "foto5.jpg"
  },
   {
    nombre: "Suavizante URCA 2L ROSADO",
    descripcion: "Buena calidad y muy ricas fragancias",
    precio: "$120",
    imagen: "foto4.jpg"
  },
  {
    nombre: "Suavizante AQUA FAST 2L AZUL",
    descripcion: "Buen producto y deja rico aroma en la ropa",
    precio: "$120",
    imagen: "foto11.jpg"
  },
  {
    nombre: "Jabón de ropa Sapolio 3L",
    descripcion: "Para ropa blanca y de color, aroma floral, rinde aprox 30 lavado",
    precio: "$250",
    imagen: "foto9.png"
  },
  {
    nombre: "Limpiavidrios Griselda con",
    descripcion: "Deja tus vidrios brillantes y sin marcas.",
    precio: "$150",
    imagen: "foto10.jpg"
  },
  
   {
    nombre: "Limpiavidrios Griselda con",
    descripcion: "Deja tus vidrios brillantes y sin marcas.",
    precio: "$150",
    imagen: "foto3.jpg"
  },
   {
    nombre: "Limpiavidrios Griselda con",
    descripcion: "Deja tus vidrios brillantes y sin marcas.",
    precio: "$150",
    imagen: "foto3.jpg"
  },
   {
    nombre: "Limpiavidrios Griselda con",
    descripcion: "Deja tus vidrios brillantes y sin marcas.",
    precio: "$150",
    imagen: "foto3.jpg"
  },
   {
    nombre: "Limpiavidrios Griselda con",
    descripcion: "Deja tus vidrios brillantes y sin marcas.",
    precio: "$150",
    imagen: "foto3.jpg"
  },
   {
    nombre: "Limpiavidrios Griselda con",
    descripcion: "Deja tus vidrios brillantes y sin marcas.",
    precio: "$150",
    imagen: "foto3.jpg"
  },
   {
    nombre: "Limpiavidrios Griselda con",
    descripcion: "Deja tus vidrios brillantes y sin marcas.",
    precio: "$150",
    imagen: "foto3.jpg"
  },
   {
    nombre: "Limpiavidrios Griselda con",
    descripcion: "Deja tus vidrios brillantes y sin marcas.",
    precio: "$150",
    imagen: "foto3.jpg"
  },
   {
    nombre: "Limpiavidrios Griselda con",
    descripcion: "Deja tus vidrios brillantes y sin marcas.",
    precio: "$150",
    imagen: "foto3.jpg"
  },
   {
    nombre: "Limpiavidrios Griselda con",
    descripcion: "Deja tus vidrios brillantes y sin marcas.",
    precio: "$150",
    imagen: "foto3.jpg"
  },
   {
    nombre: "Limpiavidrios Griselda con",
    descripcion: "Deja tus vidrios brillantes y sin marcas.",
    precio: "$150",
    imagen: "foto3.jpg"
  },
   {
    nombre: "Limpiavidrios Griselda con",
    descripcion: "Deja tus vidrios brillantes y sin marcas.",
    precio: "$150",
    imagen: "foto3.jpg"
  },
   {
    nombre: "Limpiavidrios Griselda con",
    descripcion: "Deja tus vidrios brillantes y sin marcas.",
    precio: "$150",
    imagen: "foto3.jpg"
  },
   {
    nombre: "Limpiavidrios Griselda con",
    descripcion: "Deja tus vidrios brillantes y sin marcas.",
    precio: "$150",
    imagen: "foto3.jpg"
  },
   {
    nombre: "Limpiavidrios Griselda con",
    descripcion: "Deja tus vidrios brillantes y sin marcas.",
    precio: "$150",
    imagen: "foto3.jpg"
  },

];

const contenedor = document.getElementById("product-list");

productos.forEach((prod) => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${prod.imagen}" alt="${prod.nombre}">
    <h3>${prod.nombre}</h3>
    <p>${prod.descripcion}</p>
    <strong>${prod.precio}</strong>
  `;
  contenedor.appendChild(div);
});
