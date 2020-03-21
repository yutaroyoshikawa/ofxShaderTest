#version 410
 
out vec4 outputColor;
uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;
 
void main( void )
{
    vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
    
    vec2 m = vec2(mouse.x, -mouse.y) / min(resolution.x, resolution.y) * 2.0;
    m.xy += vec2(-resolution.x, resolution.y) / min(resolution.x, resolution.y);
    
    float t = 0.1 / length(p - m);
    vec3 color = vec3(sin(time), cos(time), 0.5) * t;
    outputColor = vec4(color, 1.0);
}
