function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(node, collection) {
  return collection[node.next]
}

function nodeAt(index, linkedList, collection) {
  let node = collection[linkedList]
  
  for (let i = 0; i < index; i++) {
    node = collection[node.next]
  }
  
  return node
}

function addressAt(index, linkedList, collection) {
  if (index === 0) {
    return linkedList;
  } else {
    return nodeAt(index - 1, linkedList, collection).next
  }
}
