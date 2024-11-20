document.addEventListener('DOMContentLoaded', () => {
    const btnntt = document.getElementById('tcl');
    const btndong = document.getElementById('dong');
    const form = document.getElementById('form_baotri_ntt');
    let form_open = false;

    btnntt.addEventListener('click', () => {
        if (!form_open) {
            form.style.display = 'block';
            form_open = true;
        } else {
            form.style.display = 'none';
            form_open = false;
        }
    });

    btndong.addEventListener('click', () => {
        form.style.display = 'none';
        form_open = false;
    });
    const btnimport = document.getElementById('import');
    const btndongimport = document.getElementById('dongimport');
    const form_import = document.getElementById('form_import_baotri');
    let form_import_open = false;

    btnimport.addEventListener('click', () => {
        if (!form_import_open) {
            form_import.style.display = 'block';
            form_import_open = true;
        } else {
            form_import.style.display = 'none';
            form_import_open = false;
        }
    });

    btndongimport.addEventListener('click', () => {
        form_import.style.display = 'none';
        form_import_open = false;
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const filterBtn = document.querySelector('.filter-btn');
    const dateFilter = document.querySelector('.date-filter');
    const startDate = document.getElementById('startDate');
    const endDate = document.getElementById('endDate');
    const tableRows = document.querySelectorAll('#maintenanceTableBody tr[data-date]');


    filterBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        dateFilter.classList.toggle('show');
    });


    document.addEventListener('click', function (e) {
        if (!dateFilter.contains(e.target) && !filterBtn.contains(e.target)) {
            dateFilter.classList.remove('show');
        }
    });


    dateFilter.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    function filterTable() {
        const start = startDate.value;
        const end = endDate.value;

        if (!start || !end) return;

        tableRows.forEach(row => {
            const rowDate = row.getAttribute('data-date');
            if (rowDate >= start && rowDate <= end) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });


        filterBtn.innerHTML = `Từ ${start} đến ${end} <i class="ti-angle-down"></i>`;
    }

    startDate.addEventListener('change', filterTable);
    endDate.addEventListener('change', filterTable);
});


document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    const deleteButtons = document.querySelectorAll('.nut-xoa');
    const cancelButtons = document.querySelectorAll('.nut-huy');


    deleteButtons.forEach(button => {
        button.addEventListener('click', function () {
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
        button.addEventListener('click', function () {
            const id = this.getAttribute('data-id');
            const form = document.getElementById(`form-xoa-${id}`);
            form.style.display = 'none';
            overlay.style.display = 'none';
        });
    });


    overlay.addEventListener('click', function () {
        document.querySelectorAll('.xoa-form').forEach(form => {
            form.style.display = 'none';
        });
        overlay.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function () {

    const nutSua = document.querySelectorAll('.sua');
    const popup = document.getElementById('form_bao_tri_sua');
    const closeBtn = document.querySelector('.dongsua');
    const form = document.getElementById('form_sua');

    nutSua.forEach(button => {
        button.addEventListener('click', function () {
            const mabt = this.getAttribute('data-id');
            let ngaybt = this.getAttribute('data-ngaybt');
            const mota = this.getAttribute('data-mota');
            const chiphi = this.getAttribute('data-chiphi');
            const nguoithuchien = this.getAttribute('data-nguoithuchien');

            if (ngaybt) {
                const dateObj = new Date(ngaybt);
                ngaybt = dateObj.toISOString().split('T')[0];
            }

            document.getElementById('mabt').value = mabt;
            document.getElementById('ngaybt').value = ngaybt;
            document.getElementById('mota').value = mota;
            document.getElementById('chiphi').value = chiphi;
            document.getElementById('nguoithuchien').value = nguoithuchien;

            form.action = `/sua_baotri/${mabt}/`;
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