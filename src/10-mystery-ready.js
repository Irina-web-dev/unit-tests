export const isMysteryReady = (mystery) =>{
    if(mystery.weapon && mystery.room && mystery.killer){
    return true
} else {
    return false
}
}
