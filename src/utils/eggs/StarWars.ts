let starWarsHtml: string;
let timeout: any;

function bigBang() {
    const windowWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

    const windowHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

    const canvas: HTMLCanvasElement = document.querySelector('#canvas');
    canvas.width = windowWidth;
    canvas.height = windowHeight;
    const ctx = canvas.getContext('2d');
    function smallStarCreate(starNumber: number, starSize: number) {
        for (let i = 0; i < starNumber; i++) {
            ctx.beginPath();
            const starLeft = Math.floor(Math.random() * windowWidth) + 1;
            const starTop = Math.floor(Math.random() * windowHeight) + 1;
            const colorVal01 = Math.floor(Math.random() * 106) + 150;
            const colorVal02 = Math.floor(Math.random() * 106) + 150;
            const opacityVal = Math.floor(Math.random() * 11) / 10;
            ctx.fillStyle =
                'rgba(' +
                colorVal01 +
                ', ' +
                colorVal02 +
                ', ' +
                255 +
                ', ' +
                opacityVal +
                ')';
            ctx.fillRect(starLeft, starTop, starSize, starSize);
            ctx.fill();
        }
    }
    smallStarCreate(300, 1);
    smallStarCreate(150, 2);
    ctx.restore();
    ctx.save();

    function bigStarCreate(starNumber, starSize) {
        for (let i = 0; i < starNumber; i++) {
            ctx.beginPath();
            const starLeft = Math.floor(Math.random() * windowWidth) + 1;
            const starTop = Math.floor(Math.random() * windowHeight) + 1;
            const colorVal01 = Math.floor(Math.random() * 106) + 150;
            const colorVal02 = Math.floor(Math.random() * 106) + 150;
            const opacityVal = Math.floor(Math.random() * 11) / 10;
            const radgrad = ctx.createRadialGradient(
                starLeft,
                starTop,
                0,
                starLeft,
                starTop,
                starSize
            );
            radgrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
            radgrad.addColorStop(
                1,
                'rgba(' +
                    colorVal01 +
                    ', ' +
                    colorVal02 +
                    ', ' +
                    255 +
                    ', ' +
                    opacityVal +
                    ')'
            );
            ctx.fillStyle = radgrad;
            ctx.arc(starLeft, starTop, starSize, 0, Math.PI * 2, true);
            ctx.fill();
        }
    }
    bigStarCreate(50, 1);
    bigStarCreate(20, 2);
    const sky = new Image();
    sky.src = canvas.toDataURL('image/png');
    canvas.style.background = 'url(' + sky.src + ') center center no-repeat';
    ctx.restore();
    ctx.save();
}

function insertStyle() {
    if (!document.querySelector('style.star-wars-style')) {
        const style = document.createElement('style');
        style.classList.add('star-wars-style');
        style.innerHTML = `.star-wars {
			transition: opacity 1s ease-in-out;
			opacity: 0;
			display: none;
			color: yellow;
			background-color: black;
			position: fixed;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			z-index: 20;
		}
		
		.star-wars #canvas {
			position: absolute;
			z-index: 1;
			display: none;
		}
			
		.star-wars .prelude {
			position: absolute;
			top: 40%;
			max-width: 60%;
			right: 0;
			bottom: 0;
			left: 0;
			opacity: 0;
			font-size: 40px;
			filter: blur(0.5px);
			line-height: 1.2em;
	
			z-index: 1;
			font-family: 'Archivo Narrow', sans-serif;
			color: #1B7DEB;
			text-align: center;
			margin: auto;
			text-shadow: 1.5px 0 3px rgba(251, 0, 231, 0.8), 
						0 1.5px 3px rgba(0, 233, 235, 0.8), 
						-1.5px 0 3px rgba(0, 242, 14, 0.8), 
						0 -1.5px 3px rgba(244, 45, 0, 0.8), 
						1.5px 0 3px rgba(59, 0, 226, 0.8);
		}

		@media only screen and (max-width: 1024px) and (orientation: portrait) {
			.star-wars .prelude {
				font-size: 35px;
			}
		}
		@media only screen and (max-width: 640px) and (orientation: portrait) {
			.star-wars .prelude {
				font-size: 24px;
			}
		}
		@media only screen and (max-width: 736px) and (orientation: landscape) {
			.star-wars .prelude {
				font-size: 36px;
			}
		}
		@media only screen and (min-width: 1920px) {
			.star-wars .prelude {
				font-size: 60px;
			}
		}
			
		.star-wars.active {
			display: block;
			animation: fadeIn .5s ease-in-out;
			animation-fill-mode: forwards;
		}
		.star-wars.active .prelude {
			animation: fadeInOut 4.5s ease-in-out 1s;
		}
		
		.star-wars.active .logo {
			transform: scale3d(1, 1, 1);
			max-width: 80vw;
			height: 80vh;
			margin: auto;
			position: relative;
			visibility: hidden;
			opacity: 1;
			z-index: 2;
			animation: zoomOut 10s ease-out 4.5s;
			display: block;
		}
	
		.star-wars.active #canvas {
			display: block;
		}
	
		.star-wars.active #target {
			position: absolute;
			top: -165vh;
			bottom: 0;
			left: 0;
			right: 0;
			display: flex;
			justify-content: flex-end;
			align-items: flex-end;
			overflow: hidden;
			font-size: 48px;
			filter: blur(1.2px);
			line-height: 1.2em;
			font-family: 'Archivo Narrow', sans-serif;
			text-align: justify;
			color: yellow;
			text-shadow: 1.5px 0 3px rgba(251, 0, 231, 0.8), 
						0 1.5px 3px rgba(0, 233, 235, 0.8), 
						-1.5px 0 3px rgba(0, 242, 14, 0.8), 
						0 -1.5px 3px rgba(244, 45, 0, 0.8), 
						1.5px 0 3px rgba(59, 0, 226, 0.8);
		}
		.star-wars.active #target h3 {
			color: yellow;
			text-align: center;
			font-size: 1.2em;
		}

		@media only screen and (max-width: 1024px) and (orientation: portrait) {
			.star-wars.active #target {
				font-size: 60px;
				filter: blur(2px);
			}
		}
		@media only screen and (max-width: 640px) and (orientation: portrait) {
			.star-wars.active #target {
				font-size: 24px;
				filter: blur(1px);
			}
		}
		@media only screen and (max-width: 736px) and (orientation: landscape) {
			.star-wars.active #target {
				font-size: 36px;
				filter: blur(1px);
			}
		}
		@media only screen and (min-width: 1920px) {
			.star-wars.active #target {
				font-size: 80px;
				filter: blur(2px);
			}
		}

		.star-wars.active #target > div {
			position: relative;
			animation:autoscroll 90s linear 8s;
		}
		.star-wars.active .fade-top:after {
			content:'';
			position:absolute;
			top:0;
			bottom:0;
			left:0;
			right:0;
			background: linear-gradient(to bottom, rgba(0,0,0,1) 25%, rgba(0,0,0,.9) 50%, rgba(0,0,0,.5) 75%, rgba(0,0,0,0) 100%);
			pointer-events:none;
		}
	
		.star-wars.active .body{
			position:absolute;
			top:0;
			bottom:0;
			left:0;
			right:0;
			transform-origin: 50% 100%;
			transform:perspective(450px) rotateX(30deg);
		}

		@media only screen and (max-width: 1024px) and (orientation: portrait) {
			.star-wars.active .body {
				transform:perspective(450px) rotateX(20deg);
			}
		}

		
		@keyframes autoscroll{
			to{
				bottom: 100%;
			}
		}
		
		@keyframes fadeInOut{
			0% {
				opacity: 0;
			}    
			25% {
				opacity: 1;
			}    
			75% {
				opacity: 1;
			}    
			100% {
				opacity: 0;
			}    
		}
		
		@keyframes fadeIn{
			0% {
				opacity: 0;
			}    
			100% {
				opacity: 1;
			}    
		}
		
		@keyframes zoomOut {
			0% {
				visibility: visible;
			}    
			90% {
				opacity: 1;
			}    
			100% {
				opacity: 0;
				transform: scale3d(0.1, 0.1, 0.1);
			}    
		}
		
`;
        document.body.appendChild(style);
    }
}

export function StarWars() {
    const hint = document.createElement('link');
    hint.rel = 'preconnect';
    hint.href = 'https://www.youtube-nocookie.com/embed/_D0ZQPqeJkk?autoplay=1';

    const starWarsDiv = document.createElement('div');
    starWarsDiv.innerHTML = starWarsHtml;

    if (!timeout) {
        timeout = setTimeout(function() {
            clearTimeout(timeout);
            timeout = null;
            starWarsDiv.remove();
            hint.remove();
        }, 95000);
    } else {
        return;
    }

    insertStyle();

    document.querySelector('body').appendChild(starWarsDiv);
    const scrollTextEl: HTMLElement = document.querySelector(
        '.star-wars.active #target > div'
    );
    const scrollTextHeight = scrollTextEl.offsetHeight;
    scrollTextEl.style.bottom = '-' + scrollTextHeight + 'px';
    document.head.appendChild(hint);

    document.onkeydown = function(evt: any) {
        evt = evt || window.event;
        let isEscape = false;
        if ('key' in evt) {
            isEscape = evt.key == 'Escape' || evt.key == 'Esc';
        } else {
            isEscape = evt.keyCode == 27;
        }
        if (isEscape) {
            clearTimeout(timeout);
            timeout = null;
            starWarsDiv.remove();
            const styles = document.querySelector('.star-wars-style');
            if (styles) {
                styles.remove();
            }
            hint.remove();
        }
    };

    bigBang();
}

export function setHtml(html: string) {
    starWarsHtml = html;
}
