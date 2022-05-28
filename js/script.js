window.addEventListener('load', function () {
    let woofButton = document.getElementById('woof-button');
    let profileImage = document.getElementById('profile-image');

    let pawSvg = `<svg width="15px" height="15px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 3V2C6.5 1.17157 5.82843 0.5 5 0.5C4.17157 0.5 3.5 1.17157 3.5 2V3C3.5 3.82843 4.17157 4.5 5 4.5C5.82843 4.5 6.5 3.82843 6.5 3Z" stroke="black"/>
                <path d="M11.5 3V2C11.5 1.17157 10.8284 0.5 10 0.5C9.17157 0.5 8.5 1.17157 8.5 2V3C8.5 3.82843 9.17157 4.5 10 4.5C10.8284 4.5 11.5 3.82843 11.5 3Z" stroke="black"/>
                <path d="M14.5 7.5V7C14.5 6.17157 13.8284 5.5 13 5.5C12.1716 5.5 11.5 6.17157 11.5 7V7.5C11.5 8.32843 12.1716 9 13 9C13.8284 9 14.5 8.32843 14.5 7.5Z" stroke="black"/>
                <path d="M3.5 7.5V7C3.5 6.17157 2.82843 5.5 2 5.5C1.17157 5.5 0.5 6.17157 0.5 7V7.5C0.5 8.32843 1.17157 9 2 9C2.82843 9 3.5 8.32843 3.5 7.5Z" stroke="black"/>
                <path d="M2.8554 11.6399L5.77324 8.09678C6.66803 7.01025 8.33197 7.01025 9.22676 8.09678L12.1446 11.6399C13.084 12.7806 12.2726 14.5 10.7948 14.5C10.6009 14.5 10.4097 14.4549 10.2363 14.3681L9.87662 14.1883C8.3805 13.4403 6.6195 13.4403 5.12338 14.1883L4.76371 14.3681C4.59029 14.4549 4.39905 14.5 4.20516 14.5C2.72742 14.5 1.91599 12.7806 2.8554 11.6399Z" stroke="black"/>
                </svg>
    `;

    var notyf = new Notyf({
        duration: 2000,
        position: {
            x: 'center',
            y: 'top'
        }
    });

    setTimeout(() => {
        notyf.success({
            background: '#D9B3A8',
            icon: pawSvg,
            message: 'Welcowm wooff!'
        });
    }, 1000);

    profileImage.addEventListener('mouseover', () => {
        notyf.success({
            duration: 600,
            background: '#D9B3A8',
            icon: pawSvg,
            message: 'Woof wooff!'
        });
    });

    woofButton.addEventListener('click', () => {
        profileImage.classList.add('shake');

        notyf.success({
            background: '#D9B3A8',
            icon: pawSvg,
            message: 'Woof wooff!'
        });

        setTimeout(() => {
            profileImage.classList.remove('shake');
        }, 1000);
    });
});