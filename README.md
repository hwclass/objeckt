objeckt
=======

Objeckt : An Object Creation and Management Library Using Inheritance and Other OOP Paradigms.

### usage
<pre lang="javascript">
<code>
  var testObj = {
    testProp : 'test value'
  }

  var Main = {
    mainFunc : function() {
      console.log('main function...');
    }
  }

  var Main2 = {
    main2Func : function() {
      console.log('main 2 function...');
    },
    main2Prop : 'main 2 property.'
  }

  objeckt.inherit(testObj, [Main, Main2]);
</code>
</pre>