let timeout: any;
const meltdown = [];

function addFlake() {
    clearTimeout(timeout);
    const snowFlake = document.createElement('div');
    snowFlake.classList.add('snowflake');
    const maxAge = Math.random() * 20 + 5;
    snowFlake.style.animation = `snowflake ${maxAge}s infinite linear`;
    const sizeEffect = Math.random();
    snowFlake.style.filter = `grayscale(${Math.random() + 0.3})${
        sizeEffect < 0.7 ? ` blur(${1 - Math.pow(sizeEffect, 3)}px)` : ''
    }`;
    snowFlake.style.fontSize = `${sizeEffect * 2}rem`;
    snowFlake.style.opacity = `${Math.min(sizeEffect + 0.1, 1)}`;
    snowFlake.style.left = `${Math.random() * 95}vw`;
    snowFlake.style.top = `${window.scrollY}px`;
    document.body.appendChild(snowFlake);
    timeout = setTimeout(addFlake, Math.random() * 500);
    const meltTimeout = setTimeout(() => {
        document.body.removeChild(snowFlake);
    }, maxAge * 1000);
    meltdown.push(meltTimeout);
}

function addSnowman() {
    const snowman = document.createElement('div');
    snowman.classList.add('snowman');
    document.body.appendChild(snowman);
}

export function Snow() {
    let style: HTMLStyleElement;
    let letItSnow: HTMLDivElement;
    let hint: HTMLLinkElement;

    if (timeout) {
        clearTimeout(timeout);
    }

    if (!document.querySelector('.snowflake')) {
        hint = document.createElement('link');
        hint.rel = 'preconnect';
        hint.href =
            'https://www.youtube-nocookie.com/embed/_D0ZQPqeJkk?autoplay=1';
        document.head.appendChild(hint);

        style = document.createElement('style');
        style.innerHTML = `.snowflake {
        transition: all .3s;
    position: absolute;
    color: white;
    top: 0;
    margin-top: 0;
}
.snowflake::after {
    content: "\\2744";
}
.snowman {
    position: fixed;
    bottom: 0;
    left: 0;
    font-size: 4rem;
}
.snowman::after {
    content: "\\2603";
}

@keyframes snowflake {
    0% {
        transform: rotate(0deg);
        margin-left: -5px;
    }
    5% {
        margin-left: 5px;
    }
    10% {
        margin-left: -5px;
    }
    15% {
        margin-left: 5px;
    }
    20% {
        margin-left: -5px;
    }
    25% {
        margin-left: 5px;
    }
    30% {
        margin-left: -5px;
    }
    40% {
        margin-left: 5px;
    }
    45% {
        margin-left: -5px;
    }
    50% {
        margin-left: 5px;
    }
    55% {
        margin-left: -5px;
    }
    60% {
        margin-left: 5px;
    }
    65% {
        margin-left: -5px;
    }
    70% {
        margin-left: 5px;
    }
    75% {
        margin-left: -5px;
    }
    80% {
        margin-left: 5px;
    }
    85% {
        margin-left: -5px;
    }
    90% {
        margin-left: 5px;
    }
    95% {
        margin-left: -5px;
    }
    100% {
        margin-top: 100%;
        transform: rotate(359deg);
        opacity: 0;
    }
}
`;
        document.body.appendChild(style);
        letItSnow = document.createElement('div');
        letItSnow.innerHTML =
            '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/mN7LW0Y00kE?autoplay=1" frameborder="0" allowfullscreen style="display: none;"></iframe>';
        document.body.appendChild(letItSnow);

        timeout = setTimeout(addFlake, 0);
        addSnowman();
    }

    function undo(e) {
        if (e.which === 27) {
            clearTimeout(timeout);
            document.head.removeChild(hint);
            document.body.removeChild(style);
            document.body.removeChild(letItSnow);
            [].slice
                .call(document.querySelectorAll('.snowflake, .snowman'))
                .forEach((el) => {
                    document.body.removeChild(el);
                });
            document.removeEventListener('keyup', undo, false);
            meltdown.forEach((meltTimeout) => {
                clearTimeout(meltTimeout);
            });
        }
    }
    document.addEventListener('keyup', undo, false);
}
