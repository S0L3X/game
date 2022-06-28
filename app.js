const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class Ball {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = {
            x: 2,
            y: 5
        }
    }
    draw() {
        c.fillStyle = this.color
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        c.closePath()
        c.fill()
    }
    update() {
        this.draw()
        this.y += this.velocity.y
        this.x += this.velocity.x
        if (
            this.y > canvas.height - this.radius ||
            this.y < 0 + this.radius 
        )   this.velocity.y = -this.velocity.y
        
        if (            
            this.x > canvas.width - this.radius ||
            this.x < 0 + this.radius
        )   this.velocity.x = -this.velocity.x
    }
}
let x = canvas.width -15
let y = canvas.height / 2
const ball = new Ball(x, y, 10, '#00ff00')

const init = () => {
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
}

const animate = () => {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    ball.update()
}
init()
animate()

addEventListener('resize', init)
