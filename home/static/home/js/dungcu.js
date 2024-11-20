document.addEventListener('DOMContentLoaded', () =>{
    const btnntt = document.getElementById('tcl');
    const btndong = document.getElementById('dong');
    const form = document.getElementById('form_dungcu_ntt');
    let form_open = false;

    btnntt.addEventListener('click', () =>{
        if(!form_open){
            form.style.display = 'block';
            form_open = true;
        }else{
            form.style.display = 'none';
            form_open = false;
        }
    });

    btndong.addEventListener('click', () =>{
        form.style.display = 'none';
        form_open = false;
    });
    const btnimport = document.getElementById('import');
    const btndongimport = document.getElementById('dongimport');
    const form_import = document.getElementById('form_import_dungcu');
    let form_import_open = false;

    btnimport.addEventListener('click', () =>{
        if(!form_import_open){
            form_import.style.display = 'block';
            form_import_open = true;
        }else{
            form_import.style.display = 'none';
            form_import_open = false;
        }
    });

    btndongimport.addEventListener('click', () =>{
        form_import.style.display = 'none';
        form_import_open = false;
    });
});
document.addEventListener('DOMContentLoaded', function () {
        

    const nutSua = document.querySelectorAll('.sua');
    const popup = document.getElementById('form_dungcu_sua');
    const closeBtn = document.querySelector('.dongsua');
    const form = document.getElementById('form_sua');


    nutSua.forEach(button => {
        button.addEventListener('click', function () {

            const madc = this.getAttribute('data-id');
            const tendc = this.getAttribute('data-tendc');
            const soluong = this.getAttribute('data-soluong');
            const dvt = this.getAttribute('data-dvt');
            let ngaymua = this.getAttribute('data-ngaymua');
            const giamua = this.getAttribute('data-giamua');

            if(ngaymua) {
                const dateObj = new Date(ngaymua);
                ngaymua = dateObj.toISOString().split('T')[0];
            }
            document.getElementById('madc').value = madc;
            document.getElementById('tendc').value = tendc;
            document.getElementById('soluong').value = soluong;
            document.getElementById('dvt').value = dvt;
            document.getElementById('ngaymua').value = ngaymua;
            document.getElementById('giamua').value = giamua;


            const form = document.getElementById('form_sua');
            form.action = `/sua_dungcu/${madc}/`;

            popup.style.display = 'block';
        });
    });


    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });


    window.addEventListener('click', function (e) {
        if (e.target == popup) {
            popup.style.display = 'none';
        }
    });
})

