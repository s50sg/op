for(i=100; i<=10000; i=i+1){
	   st=0
	   for(k=1;i/2>=k;k=k+1){
		         if(i%k==0){
				         st=st+k
				         if(st>=100 && st<=10000){
						            st2=0
						            for(p=1;st/2>=p;p=p+1){
								                   if(st%p==0){
											                    st2=st2+p}
							    }
						                 if(st2==i && st!=i && i<st){
									                    console.log(i,st)
								 }
					 }
			 }
	   }
}
