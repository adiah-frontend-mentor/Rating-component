const submitBtn = document.getElementById('submit');
const rateBox = document.getElementById('rating');
const thankBox = document.getElementById('thanks');
const result = document.getElementById('result')

const ratings = document.querySelectorAll('.choice');
let rating = null;

ratings.forEach(btn => {
	btn.onclick = () => {
		ratings.forEach(item => {
			if (item.dataset.rank === btn.dataset.rank) {
				item.classList.add('chosen')
			}else {
				item.classList.remove('chosen')
			}
		})
		rating = btn.dataset.rank
	}
})

const showResult = () => {
	rateBox.classList.add('hidden');
	thankBox.classList.remove('hidden');
	result.innerHTML = `You selected ${rating} out of 5`

}

// submitBtn.onclick = showResult;

submitBtn.onclick = () => {
	if (rating) {
		showResult()
	}
}