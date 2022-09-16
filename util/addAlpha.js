export default function addAlpha(color ,opacity){
    // coerce values so ti is between 0 and 1.
    if(color.length > 7) return color
    const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    return color + _opacity.toString(16).toUpperCase();
}