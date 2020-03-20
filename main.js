var http = require("http");

http
  .createServer(function(request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { "Content-Type": "text/plain" });

    // Send the response body as "Hello World"
    response.end("Hello World\n");
  })
  .listen(8081);

// Console will print the message
console.log("Server running at http://127.0.0.1:8081/");

// --------------------------------

let Relationship = Object.freeze({
    parent: 0,
    child: 1,
    sibling: 2
  });
  
  class Person
  {
    constructor(name)
    {
      this.name = name;
    }
  }
  
  // LOW-LEVEL (STORAGE)
  
  class RelationshipBrowser
  {
    constructor()
    {
      if (this.constructor.name === 'RelationshipBrowser')
        throw new Error('RelationshipBrowser is abstract!');
    }
  
    findAllChildrenOf(name) {}
  }
  
  class Relationships extends RelationshipBrowser
  {
    constructor()
    {
      super();
      this.data = [];
    }
  
    addParentAndChild(parent, child)
    {
      this.data.push({
        from: parent,
        type: Relationship.parent,
        to: child
      });
      this.data.push({
        from: child,
        type: Relationship.child,
        to: parent
      });
    }
  
  
    findAllChildrenOf(name) {
      return this.data.filter(r =>
        r.from.name === name &&
        r.type === Relationship.parent
      ).map(r => r.to);
    }
  }
  
  // HIGH-LEVEL (RESEARCH)
  
  class Research
  {
    // constructor(relationships)
    // {
    //   // problem: direct dependence ↓↓↓↓ on storage mechanic
    //   let relations = relationships.data;
    //   for (let rel of relations.filter(r =>
    //     r.from.name === 'John' &&
    //     r.type === Relationship.parent
    //   ))
    //   {
    //     console.log(`John has a child named ${rel.to.name}`);
    //   }
    // }
  
    constructor(browser)
    {
      for (let p of browser.findAllChildrenOf('John'))
      {
        console.log(`John has a child named ${p.name}`);
      }
    }
  }
  
  let parent = new Person('John');
  let child1 = new Person('Chris');
  let child2 = new Person('Matt');
  
  // low-level module
  let rels = new Relationships();
  rels.addParentAndChild(parent, child1);
  rels.addParentAndChild(parent, child2);
  
  new Research(rels);