module.exports = (progress, max, options) => {
  const opts = {
    background: '#EEEEEE',
    foreground: '#34d058',
    width: 668,
    height: 6,
    paddingX: 17,
    paddingY: 10,
    ...options
  }

  const percentage = Math.floor((progress / max) * 100)

  return `<svg width="${opts.width}px" height="58px" viewBox="0 0 ${opts.width} 58" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="poll">
          <g id="Group" transform="translate(${opts.paddingX}.000000, ${opts.paddingY}.000000)">
              <rect id="Rectangle" fill="${opts.background}" x="0" y="19" width="100%" height="${opts.height}" rx="2"/>
              <rect id="Rectangle" fill="${opts.foreground}" x="0" y="19" width="0" height="${opts.height}" rx="2">
                <animate attributeName="width" begin="0.5s" dur="600ms" from="0" to="${percentage}%" repeatCount="1" fill="freeze" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1"/>
              </rect>
              <text id="Option-A" font-family="-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif" font-size="12" font-weight="bold" letter-spacing="1" fill="#212529">
                <tspan x="0" y="12">Progress</tspan>
              </text>
              <text x="${opts.width - opts.paddingX}" y="12" id="150" text-anchor="end" font-family="-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif" font-size="12" font-weight="normal" letter-spacing="1" fill="#868E96">
                <tspan>${progress} of ${max}</tspan>
              </text>
          </g>
      </g>
  </g>
  </svg>`
}
