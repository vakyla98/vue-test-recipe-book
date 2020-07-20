//change data structure from nested object to array of objects
export default function restructure(objects) {
    let result = []
    for (let object in objects) {
        objects[object].key = object
        result.push(objects[object])
    }
    return result
}
