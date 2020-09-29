const Tree = require('../BFS.js').Tree;
const TreeNode = require('../BFS.js').TreeNode;




describe('BF Binary Search Tree', () => {
  let testTree = new Tree();
  let testTree2 = new Tree();

  beforeAll(() => {
    testTree.root = new TreeNode('H');
    testTree.root.children.push(new TreeNode('e'));
    testTree.root.children.push(new TreeNode('l'));
    testTree.root.children[0].children.push(new TreeNode('l'));
    testTree.root.children[0].children.push(new TreeNode('o'));
    testTree.root.children[0].children.push(new TreeNode('W'));
    testTree.root.children[1].children.push(new TreeNode('o'));
    testTree.root.children[1].children.push(new TreeNode('r'));
    testTree.root.children[1].children.push(new TreeNode('l'));
    testTree.root.children[1].children.push(new TreeNode('d'));

    testTree2.root = new TreeNode(10);
    testTree2.root.children.push(new TreeNode(6));
    testTree2.root.children.push(new TreeNode(15));
    testTree2.root.children[0].children.push(new TreeNode(3));
    testTree2.root.children[0].children.push(new TreeNode(8));
    testTree2.root.children[1].children.push(new TreeNode(7));
    testTree2.root.children[1].children.push(new TreeNode(20));
  });

  it('BFS()  with numbers', () => {
    let expected = [10, 6, 15, 3, 8, 7, 20, ];
    let traverseBFS = testTree2.traverseBFS();
    expect(traverseBFS).toEqual(expected);
  });

  it('BFS()  with charachters', () => {
    let expected = ['H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd'];
    let traverseBFS = testTree.traverseBFS();
    expect(traverseBFS).toEqual(expected);
  });
})
