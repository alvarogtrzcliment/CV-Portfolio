// Boton Leer mas Beca investigacion

document.getElementById('Boton_investigacion').addEventListener('click',investigacion)

function investigacion(){
    if(document.getElementById('Boton_investigacion').innerHTML == 'Leer Mas'){
        document.getElementById('i1').innerHTML = 'Realicé un análisis en profundidad del desarrollo de la corteza de diferentes especies forestales españolas en laboratorio dirigido por 3 profesores asegurando la calidad de la investigación.'
        document.getElementById('i2').innerHTML = 'Experiencia con lenguajes de programación científicos estándar como Python y R y sus respectivos entornos de desarrollo.'
        document.getElementById('i3').innerHTML = 'Desarrollé un nuevo software que simula el proceso de formación de diferentes tipologías de cortezas utilizando bibliotecas específicas de Python como Pandas, Matplotlib, Tkinter, Numpy,etc.'
        document.getElementById('Boton_investigacion').innerHTML = 'Leer Menos'
        document.getElementById('listainvestigacion').style.padding = '3%'
        document.getElementById('listainvestigacion').style.paddingLeft = '18%'
        document.getElementById('listainvestigacion').style.listStyle = 'circle'   
    }else{
        document.getElementById('i1').innerHTML = ''
        document.getElementById('i2').innerHTML = ''
        document.getElementById('i3').innerHTML = ''
        document.getElementById('listainvestigacion').style.padding = '0%' 
        document.getElementById('listainvestigacion').style.listStyle = 'none'
        document.getElementById('Boton_investigacion').innerHTML = 'Leer Mas'
    }


}

// Boton Beca Ingenieria

document.getElementById('Boton_proyectos').addEventListener('click',proyectos)

function proyectos(){
    if(document.getElementById('Boton_proyectos').innerHTML == 'Leer Mas'){
        document.getElementById('p1').innerHTML = 'Apoyo al departamento técnico a cargo de la redacción de la documentación necesaria para licitaciones públicas y gestión de proyectos utilizando software clave como MS Word, MS Project, AutoCAD y Presto.'
        document.getElementById('p2').innerHTML = 'Experiencia en trato con clientes y proveedores.'
        document.getElementById('Boton_proyectos').innerHTML = 'Leer Menos'
        document.getElementById('listaproyectos').style.padding = '3%'
        document.getElementById('listaproyectos').style.paddingLeft = '18%'
        document.getElementById('listaproyectos').style.listStyle = 'circle'   
    }else{
        document.getElementById('p1').innerHTML = ''
        document.getElementById('p2').innerHTML = ''
        document.getElementById('listaproyectos').style.padding = '0%' 
        document.getElementById('listaproyectos').style.listStyle = 'none'
        document.getElementById('Boton_proyectos').innerHTML = 'Leer Mas'
    }


}

// Boton Master

document.getElementById('Boton_master').addEventListener('click',master)

function master(){
    if(document.getElementById('Boton_master').innerHTML == 'Leer Mas'){
        document.getElementById('m1').innerHTML = 'Formación integral en la plataforma ArcGIS , desde el uso de herramientas de escritorio como ArcGIS Pro , hasta administración de la plataforma ArcGIS y generación de aplicaciones basadas en GIS'
        document.getElementById('Boton_master').innerHTML = 'Leer Menos'
        document.getElementById('listamaster').style.padding = '3%'
        document.getElementById('listamaster').style.paddingLeft = '18%'
        document.getElementById('listamaster').style.listStyle = 'circle'   
    }else{
        document.getElementById('m1').innerHTML = ''
        document.getElementById('listamaster').style.padding = '0%'
        document.getElementById('listamaster').style.listStyle = 'none' 
        document.getElementById('Boton_master').innerHTML = 'Leer Mas'
    }

}

// Boton Grado

document.getElementById('Boton_grado').addEventListener('click',grado)

function grado(){
    if(document.getElementById('Boton_grado').innerHTML == 'Leer Mas'){
        document.getElementById('g1').innerHTML = 'Especialización en industrias forestales.'
        document.getElementById('g2').innerHTML = 'Nota media: 7.20'
        document.getElementById('g3').innerHTML = 'Trabajo de fin de grado: <i>Un modelo matemático computacional para estudiar la formación de cortezas de distinta tipología en especies leñosas</i> Disponible en: <a href="https://github.com/GGFHF/ModelBark">GitHUB</a>'
        document.getElementById('Boton_grado').innerHTML = 'Leer Menos'
        document.getElementById('listagrado').style.padding = '3%'
        document.getElementById('listagrado').style.paddingLeft = '18%'
        document.getElementById('listagrado').style.listStyle = 'circle'   
    }else{
        document.getElementById('g1').innerHTML = ''
        document.getElementById('g2').innerHTML = ''
        document.getElementById('g3').innerHTML = ''
        document.getElementById('listagrado').style.padding = '0%' 
        document.getElementById('listagrado').style.listStyle = 'none'
        document.getElementById('Boton_grado').innerHTML = 'Leer Mas'
    }
}

