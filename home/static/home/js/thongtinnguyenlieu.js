document.addEventListener('DOMContentLoaded', () =>{
    const btnntt = document.getElementById('tcl');
    const btndong = document.getElementById('dong');
    const form = document.getElementById('form_thongtinnguyenlieu_ntt');
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
    const form_import = document.getElementById('form_import_thongtinnguyenlieu');
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

document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    const deleteButtons = document.querySelectorAll('.nut-xoa');
    const cancelButtons = document.querySelectorAll('.nut-huy');


    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const form = document.getElementById(`form-xoa-${id}`);
            
     
            document.querySelectorAll('.xoa-form').forEach(f => {
                if (f !== form) {
                    f.style.display = 'none';
                }
            });

      
            form.style.display = 'block';
            overlay.style.display = 'block';
        });
    });

    cancelButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const form = document.getElementById(`form-xoa-${id}`);
            form.style.display = 'none';
            overlay.style.display = 'none';
        });
    });


    overlay.addEventListener('click', function() {
        document.querySelectorAll('.xoa-form').forEach(form => {
            form.style.display = 'none';
        });
        overlay.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', function(){
                
    const nutSua = document.querySelectorAll('.sua');
        const popup = document.getElementById('form_nguyenlieu_sua');
        const closeBtn = document.querySelector('.dongsua');
        const form = document.getElementById('form_sua');
    

        nutSua.forEach(button => {
            button.addEventListener('click', function() {

                const manl = this.getAttribute('data-id');
                const tennl = this.getAttribute('data-tennl');
                const gia = this.getAttribute('data-gia');
                let ngayhethan = this.getAttribute('data-ngayhethan');
    
                if(ngayhethan) {
                    const dateObj = new Date(ngayhethan);
                    ngayhethan = dateObj.toISOString().split('T')[0];
                }
                document.getElementById('manl').value = manl;
                document.getElementById('tennl').value = tennl;
                document.getElementById('gia').value = gia;
                document.getElementById('ngayhethan').value = ngayhethan;
    

                const form = document.getElementById('form_sua');
                form.action = `/sua_thongtinnguyenlieu/${manl}/`;
                popup.style.display = 'block';
            });
        });
    

        closeBtn.addEventListener('click', function() {
            popup.style.display = 'none';
        });
    

        window.addEventListener('click', function(e) {
            if (e.target == popup) {
                popup.style.display = 'none';
            }
        });
})