export const drawRect = (detections, ctx) => {
    detections.forEach(prediction=>{
        //get predition result
        const [x,y,width,height] = prediction['bbox'];
        const text = prediction['class'];

        //set styling
        const color = 'green'
        ctx.strokestyle = color
        ctx.font = '18px Arial'
        ctx.fillStyle = color

        //Draw rectangle and text
        ctx.beginPath()
        ctx.fillText(text, x, y)
        ctx.rect(x, y, width, height)
        ctx.stroke()
    })
}