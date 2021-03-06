class sliderCarousel {
	constructor({
		main,
		wrap,
		prev,
		next,
		position = 0,
		truePosition = false,
		slidesToShow = false,
		infinity = false,
		responsive = []
	}) {
		this.main = document.querySelector(main);
		this.wrap = document.querySelector(wrap);
		this.next = document.querySelector(next);
		this.prev = document.querySelector(prev);
		this.slides = this.wrap.children;
		this.slidesToShow = slidesToShow;
		this.slidesToShowDefault = slidesToShow;
		this.options = {
			position,
			truePosition,
			infinity,
			slideWidth: (Math.floor((100 / this.slidesToShow * 10)) / 10)
		};
		this.responsive = responsive;
		this.prevBtnFunc = () => {
			this.prevSlider.call(this);
		};
		this.nextBtnFunc = () => {
			this.nextSlider.call(this);
		};
		this.styleName = main.replace(/^[#.]/, '');
	}
	// Для фокуса на выбранном слайде при смене разрешения. Передавать методу номер слайда, который выбрали.
	setPosition(position) {
		if (position < 0) {
			position = this.slides.length - 1;
		}
		if (position > this.slides.length - 1) {
			position = 0;
		}
		this.options.truePosition = position;
		// this.options.position = position;
		// this.wrap.style.transform = `translateX(-${this.options.position * this.options.slideWidth}%)`;
	}
	getData() {
		return {
			position: this.options.position,
			slidesToShow: this.slidesToShow
		};
	}
	init() {
		this.addGloClass();
		this.addStyle.call(this);

		if (this.prev && this.next) {
			this.controlSlider();
		} else {
			this.addArrow();
			this.controlSlider();
		}
		if (this.responsive) {
			this.responseInit.call(this);
		}
	}
	remove() {
		this.prev.removeEventListener('click', this.prevBtnFunc);
		this.next.removeEventListener('click', this.nextBtnFunc);
		this.removeGloClass();
		this.wrap.style.transform = ``;
	}
	addGloClass() {
		this.main.classList.add(`${this.styleName}-slider`);
		this.wrap.classList.add(`${this.styleName}-slider__wrap`);
		for (const item of this.slides) {
			item.classList.add(`${this.styleName}-slider__item`);
		}
	}
	removeGloClass() {
		this.main.classList.remove(`${this.styleName}-slider`);
		this.wrap.classList.remove(`${this.styleName}-slider__wrap`);
		for (const item of this.slides) {
			item.classList.remove(`${this.styleName}-slider__item`);
		}
	}
	addStyle() {
		let style = document.getElementById(`${this.styleName}-style`);
		if (!style) {
			style = document.createElement(`style`);
			style.id = `${this.styleName}-style`;
		}
		style.textContent = `
			.${this.styleName}-slider {
				position: relative;
				overflow: hidden !important;
			}
			.${this.styleName}-slider__wrap {
				display: flex !important;
				flex-direction: row;
				flex-wrap: nowrap;
				transition: transform 0.3s !important;
				will-change: transform !important;
			}
			.${this.styleName}-slider__item {
				flex: 0 0 ${this.options.slideWidth}% !important;
				margin: auto 0 !important;
			}
		`;
		document.head.appendChild(style);
	}
	controlSlider() {
		this.prev.addEventListener(`click`, this.prevBtnFunc);
		this.next.addEventListener(`click`, this.nextBtnFunc);
	}
	prevSlider() {
		if (this.options.infinity || this.options.position > 0) {
			--this.options.position;
			if (this.options.position < 0) {
				this.options.position = this.slides.length - this.slidesToShow;
			}
			this.wrap.style.transform = `translateX(-${this.options.position * this.options.slideWidth}%)`;
		}
	}
	nextSlider() {
		if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {
			++this.options.position;
			if (this.options.position > this.slides.length - this.slidesToShow) {
				this.options.position = 0;
			}
			this.wrap.style.transform = `translateX(-${this.options.position * this.options.slideWidth}%)`;
		}
	}
	addArrow() {
		this.prev = document.createElement(`button`);
		this.next = document.createElement(`button`);
		this.prev.classList = `glo-slider__prev`;
		this.next.classList = `glo-slider__next`;
		this.main.appendChild(this.prev);
		this.main.appendChild(this.next);
		const style = document.createElement(`style`);
		style.textContent = `
			.glo-slider__prev, .glo-slider__next {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				width: 40px;
				height: 40px;
				background-color: rgba(0, 0, 0, .5);
				background-repeat: no-repeat;
				background-size: 30px;
				border-radius: 50%;
				border: none;
			}
			.glo-slider__prev {
				left: 20px;
				background-image: url(../images/icons/left-arrow.svg);
				background-position: 50% 50%;
			}
			.glo-slider__next {
				right: 20px;
				background-image: url(../images/icons/right-arrow.svg);
				background-position: 50% 50%;
			}
			.glo-slider__prev:hover,
			.glo-slider__next:hover, 
			.glo-slider__prev:focus, 
			.glo-slider__next:focus {
				outline: none;
			}
		`;
		document.head.appendChild(style);
	}
	responseInit() {
		const slidesToShowDefault = this.slidesToShow;
		const allResponse = this.responsive.map(item => item.breakpoint).sort((a, b) => a - b);
		const checkResponse = () => {
			const windowWidth = document.documentElement.clientWidth;
			const nearestMore = allResponse.find(width => {
				if (width >= windowWidth) {
					return width;
				}
			});
			if (nearestMore) {
				let responsiveId;
				this.responsive.find((resp, id) => {
					if (resp.breakpoint === nearestMore) {
						responsiveId = id;
						return true;
					}
				});
				this.slidesToShow = this.responsive[responsiveId].slidesToShow;
				if (this.slidesToShow) {
					this.options.slideWidth = (Math.floor((100 / this.slidesToShow * 10)) / 10);
					// если передавали значение truePosition через метод setPosition
					if (this.options.truePosition !== false) {
						if (this.options.truePosition > this.slides.length - this.slidesToShow) {
							this.options.position = this.slides.length - this.slidesToShow;
						} else {
							this.options.position = this.options.truePosition;
						}
					}
					this.wrap.style.transform = `translateX(-${this.options.position * this.options.slideWidth}%)`;
					this.addGloClass();
					this.addStyle();
					this.controlSlider();
				} else {
					this.remove();
				}
			} else {
				if (this.slidesToShowDefault) {
					this.slidesToShow = slidesToShowDefault;
					this.options.slideWidth = (Math.floor((100 / this.slidesToShow * 10)) / 10);
					// если передавали значение truePosition через метод setPosition
					if (this.options.truePosition !== false) {
						if (this.options.truePosition > this.slides.length - this.slidesToShow) {
							this.options.position = this.slides.length - this.slidesToShow;
						} else {
							this.options.position = this.options.truePosition;
						}
					}
					this.wrap.style.transform = `translateX(-${this.options.position * this.options.slideWidth}%)`;
					this.addGloClass();
					this.addStyle();
					this.controlSlider();
				} else {
					this.remove();
				}
			}
		};
		checkResponse();
		window.addEventListener(`resize`, checkResponse);
	}
}

export default sliderCarousel;
