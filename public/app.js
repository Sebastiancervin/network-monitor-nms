async function cargarDispositivos(){

  const res = await fetch("/dispositivos");

  const dispositivos = await res.json();

  const contenedor = document.getElementById("dispositivos");

  contenedor.innerHTML="";

  dispositivos.forEach(d => {

    const estadoClase = d.estado === "online" ? "online" : "offline";

    contenedor.innerHTML += `
      <div class="card">
        <h2>${d.hostname}</h2>
        <p>${d.ip}</p>
        <p class="${estadoClase}">${d.estado}</p>
        <p>${d.latencia}</p>
      </div>
    `;

  });

}

setInterval(cargarDispositivos,5000);

cargarDispositivos();