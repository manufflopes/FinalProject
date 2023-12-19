document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.web_content')

    elements.forEach(element => {
        const tooltipText = element.getAttribute('data-tooltip')
        const tooltip = document.createElement('span')
        tooltip.className = 'tooltip'
        tooltip.textContent = tooltipText
        element.appendChild(tooltip)

        element.addEventListener('mouseover', function () {
            const tooltip = this.querySelector('.tooltip')
            tooltip.style.display = 'block'
            this.style.border = '2px solid #ff66c4'
        })

        element.addEventListener('mouseout', function () {
            const tooltip = this.querySelector('.tooltip')
            tooltip.style.display = 'none'
            this.style.border = '1px solid #ccc'
        })
    })
})
