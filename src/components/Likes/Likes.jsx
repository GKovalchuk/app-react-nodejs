import './Likes.css'
import React from 'react';
import cn from 'classnames';

const Likes = ({ likes, classes = [] }) => {

	return (
		<button type='button' className={cn('likes_wrapper', [...classes])}>
			<svg width="14" height="13" viewBox="0 0 14 13" fill="none" stroke="#8591A5" xmlns="http://www.w3.org/2000/svg">
				<g clipPath="url(#clip0_34_2995)">
					<path d="M6.46461 11.0694L6.45371 11.0587L6.44218 11.0487C4.75971 9.58862 3.4089 8.40013 2.47387 7.28413C1.54424 6.17459 1.07764 5.19637 1.07764 4.16314C1.07764 2.49039 2.38985 1.18945 4.11863 1.18945C5.06722 1.18945 6.02366 1.63104 6.6372 2.34234L7.01581 2.78129L7.39443 2.34234C8.00796 1.63104 8.9644 1.18945 9.91299 1.18945C11.6418 1.18945 12.954 2.49039 12.954 4.16314C12.954 5.19637 12.4874 6.17459 11.5578 7.28413C10.6227 8.40013 9.27191 9.58862 7.58945 11.0487L7.57791 11.0587L7.56701 11.0694L7.01581 11.6101L6.46461 11.0694Z" />
				</g>
				<defs>
					<clipPath id="clip0_34_2995">
						<rect width="12.8764" height="11.6211" fill="white" transform="translate(0.577637 0.689453)" />
					</clipPath>
				</defs>
			</svg>

			<p className="likes_counter">{likes}</p>
		</button>
	);
}

export default Likes;