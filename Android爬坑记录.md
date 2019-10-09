# Android爬坑记录

##### 1. 传递数据

- intent

  > 作为“发送方”的活动：
  >
  > > String data = "Hello SecondActivity";
  > >
  > > Intent intent = new Intent(FirstActivity.this, SecondActivity.class);
  > >
  > > intent.putExtra("extra_data", data);//第一个参数是键，用于从Intent中取值，第二个参数才是真正要传的数据
  >
  > 作为“接收方”的活动：onCreate函数内：
  >
  > > Intent intent = getIntent();//获得用于启动接收方活动的intent
  > >
  > > String data = intent.getStringExtra("extra_data");//如果是int类型的数据，就用getIntExtra()

- bundle

  >```
  >@Override
  >protected void onSaveInstanceState(Bundle outState) {    				super.onSaveInstanceState(outState);    
  >	String tempData = "Something you just typed";    					outState.putString("data_key", tempData);//如果是int类型就用putInt()
  >	}
  >```

  > ```
  > @Override
  > protected void onCreate(Bundle savedInstanceState) {    				super.onCreate(savedInstanceState);    
  > 	Log.d(TAG, "onCreate");    
  > 	setContentView(R.layout.activity_main);    
  > 	if (savedInstanceState != null){        
  > 		String tempData = savedInstanceState.getString("data_key");        		Log.d(TAG, tempData);    
  > 	}
  > }
  > ```

- 二者结合

  > 把需要保存的数据放在Bundle对象里，然后再将Bundle对象存放到Intent里，到了目标活动之后先从Intent里取出Bundle，再从Bundle中一一取出数据。