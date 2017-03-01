export default generateTree => {

    let tree = {
        0: {
            id: 0,
            counter: 0,
            childIds: []
        }
    }

    for( let i=1; i< 10; i++ ){
        let parent_id = Math.floor(Math.pow(Math.random(), 2) * i );

        tree[i] = {
            id: i,
            counter: 0,
            childIds: []
        }

        tree[parent_id].childIds.push(i)
    }

    return tree;
}
