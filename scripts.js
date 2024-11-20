// Funciones para cambiar de pestaña y desplazarse a secciones
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


function generateDocument() {
    var docType = document.getElementById('doc-type').value;
    var resultDiv = document.getElementById('document-results');
    
    // Limpiar resultados anteriores
    resultDiv.innerHTML = '';
    
    // Seleccionar la plantilla según el tipo de documento
    var templateId = '';
    var data = {};
    
    switch (docType) {
        case 'resume':
            templateId = 'template-resume';
            data = {
                name: 'Juan Pérez',
                email: 'juan@example.com',
                experience: '3 años en desarrollo web'
            };
            break;
        case 'job_offer':
            templateId = 'template-job-offer';
            data = {
                title: 'Desarrollador Front-end',
                description: 'Buscamos un desarrollador con experiencia en HTML, CSS y JavaScript.',
                requirements: 'Experiencia mínima de 2 años en desarrollo web.'
            };
            break;
        case 'contract':
            templateId = 'template-contract';
            data = {
                employee: 'María García',
                contractType: 'Tiempo completo',
                salary: '$30,000 MXN mensuales'
            };
            break;
        default:
            resultDiv.innerHTML = '<p>Seleccione un tipo de documento válido.</p>';
            return;
    }
    
    // Obtener la plantilla del documento y clonarla
    var template = document.getElementById(templateId);
    var clone = document.importNode(template.content, true);
    
    // Llenar la plantilla con los datos
    for (var key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            var element = clone.getElementById(templateId + '-' + key);
            if (element) {
                element.textContent = data[key];
            }
        }
    }
    
    // Mostrar el documento generado en el área designada
    resultDiv.appendChild(clone);
    
    // Generar archivo y descargar
    var content = resultDiv.innerHTML;
    var blob = new Blob([content], { type: 'text/html' });
    var url = URL.createObjectURL(blob);
    
    var a = document.createElement('a');
    a.href = url;
    
    switch (docType) {
        case 'resume':
            a.download = 'curriculum.html';
            break;
        case 'job_offer':
            a.download = 'oferta_empleo.html';
            break;
        case 'contract':
            a.download = 'contrato.html';
            break;
        default:
            a.download = 'documento.html';
            break;
    }
    
    a.click();
}

// Función para abrir el modal
function openModal() {
    document.getElementById("applyModal").style.display = "flex";
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById("applyModal").style.display = "none";
}

// Agrega el evento de envío al formulario
document.getElementById("applyForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Tu postulación ha sido enviada exitosamente.");
    closeModal();
});
