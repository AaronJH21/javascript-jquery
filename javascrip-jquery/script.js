class Auto{
    constructor(marca,modelo,año,precio){
        this.marca=marca
        this.modelo=modelo
        this.año=año
        this.precio=precio
    }
}

let autos=[]

$(()=>{
    $('#formAuto').submit((e)=>{
        e.preventDefault()
        let auto = new Auto($('#marca').val(),$('#modelo').val(),$('#año').val(),$('#precio').val())
        autos.push(auto)

        localStorage.setItem('autosKey',JSON.stringify(autos))
        $('#formAuto').trigger("reset")
    })

    $('#boton1').on('click', () => {
        $('#divAutos').html(`
        <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Marca</th>
            <th scope="col">Modelo</th>
            <th scope="col">Año</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody id="table-body">
        </tbody>
      </table>
        `)
        let autosStorage = JSON.parse(localStorage.getItem('autosKey'))
        autosStorage.forEach((autoEnArray,indice)=>{
            $('#table-body').append(`
            <tr class="table-dark" id="auto${indice}">
            <th scope="row">${indice+1}</th>
            <td>${autoEnArray.marca}</td>
            <td>${autoEnArray.modelo}</td>
            <td>${autoEnArray.año}</td>
            <td>${autoEnArray.precio}</td>
            </tr>
            `)
        })
    })

})

