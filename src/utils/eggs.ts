import { Snow } from './eggs/Snow';
import { StarWars, setHtml } from './eggs/StarWars';

const starWarsHtml = `<div class="star-wars active">
	<canvas id="canvas"></canvas>
	<img class="logo" src="/images/logo.png"/>
	<div class="prelude">Willem Liu</div>
	<div class="fade-top">
		<div class="body">
			<div id="target">
                <div>
                    <p>person</p>
                    <ol>
                        <li>
                            <div>a person of Chinese descent.</div>
                            <div class="Index_example__3GFOp">"<strong>Willem Liu</strong>'s parents are Chinese but he himself is born and raised in the Netherlands"</div>
                        </li>
                        <li>
                            <div>a frontend developer with knowledge of
                                <ul>
                                    <li>TypeScript</li>
                                    <li>ReactJS</li>
                                    <li>NextJS</li>
                                    <li>NodeJS</li>
                                    <li>Serverless</li>
                                    <li>CSS / SCSS / CSS Modules / CSS-in-JS</li>
                                </ul>
                            </div>
                            <div class="Index_example__3GFOp">"<strong>Willem Liu</strong> is well versed in Frontend Development"</div>
                        </li>
                        <li>
                            <div>goes to the cinema quite often</div>
                            <div class="Index_example__3GFOp">"<strong>Willem Liu</strong> often goes to the cinema to watch 1 or 2 movies a week"</div>
                        </li>
                        <li>
                            <div>likes photography</div>
                            <div class="Index_example__3GFOp">"<strong>Willem Liu</strong> really strengthens the existing stereotype by always taking photos"</div>
                        </li>
                        <li>
                            <div>someone who runs regularly</div>
                            <div class="Index_example__3GFOp">"<strong>Willem Liu</strong> likes to go out for a run from time to time"</div>
                        </li>
                        <li>
                            <div>has rediscovered Lego</div>
                            <div class="Index_example__3GFOp">"<strong>Willem Liu</strong> spends way too much money on Lego"</div>
                        </li>
                    </ol>
				</div>
			</div>
		</div>
	</div>
	<iframe width="560" height="315" src="https://www.youtube.com/embed/_D0ZQPqeJkk?autoplay=1" frameborder="0" allowfullscreen style="display: none;"></iframe>
</div>`;

export function eggs() {
    const section = location.pathname.split('/')[1];
    switch (section) {
        case 'about':
            Snow();
            break;
        case 'projects':
        default:
            setHtml(starWarsHtml);
            StarWars();
    }
}
