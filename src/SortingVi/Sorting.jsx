import React, { Component } from 'react'
import './Sorting.css'
export default class Sorting extends Component {
    constructor(){
        super();
        this.arr=[];
        this.state={
            arra:[],
        }
    }
    generateRandom(arr,size){
        for(let i=0;i<size;i++){
            arr[i]=parseInt(Math.floor(Math.random()*450))
        }
    }
    componentDidMount(){
        this.generateRandom(this.arr,200)  
        this.setState({arra:this.arr})
    }
    DosetVariable(i){

        setTimeout(() => {
            //let y=document.getElementById(i).style.height=`${this.state.arra[i]}px`;
            
        }, i*100);
    }
    componentDidWilling(){
        var n=0
        for (let index = 0; index < 200; index++) {
           this.DosetVariable(index)  
        }
        this.insertionSort(this.state.arra)
    }
    InsertionHeights(arrOfJp,Jp,arrOfJ,j,i){
        setTimeout(() => {
            var arrofj=document.getElementById(j).style.height=`${arrOfJp}px`
            var arrofjp=document.getElementById(Jp).style.height=`${arrOfJ}px`
            var arrofjColor=document.getElementById(j).style.backgroundColor='Yellow'
            var arrofjColor=document.getElementById(Jp).style.backgroundColor='lightgreen'
            var key=document.getElementById(i).style.backgroundColor='black'
            var ky=document.getElementById(i).style.transition='0.222s'
            },i*150 );
    }
    setNormalColors(i){
        var n=document.getElementById(i).style.backgroundColor="red"
    }
    setIndexValue(key,arr){
        var index=arr.indexOf(key)
        var set=document.getElementById(index).style.backgroundColor="red"
    }
    insertionSort(arr){
        let n=arr.length;
        for (var i=0;i<n;i++){
            let key=arr[i]
            let j=i-1
            this.setIndexValue(key,arr)
            while(j>=0 && arr[j]>key){  
                let temp=arr[j+1];
                this.InsertionHeights(arr[j+1],j+1,arr[j],j,i)
                arr[j+1]=arr[j];
                arr[j]=temp;
                j-=1
            }
        arr[j+1]=key
        }
        console.log(arr);
    }
    componentDidBubble(){
        var arr=this.state.arra;
        this.bubbleSort(arr)
        //console.log(arr);
    }
    bubbleAnimations(arrOfJ,j,arrOfJp,Jp,i){
        setTimeout(() => {
            var n=document.getElementById(j).style.height=`${arrOfJp}px`
            var n1=document.getElementById(Jp).style.height=`${arrOfJ}px`
            var setColor=document.getElementById(j).style.backgroundColor="yellow";
            var set=document.getElementById(Jp).style.backgroundColor="lightgreen";
        },i*100);
    }
    bubbleSort(arr){
        var n=arr.length;
        for(var i=0;i<n;i++){
            for(var j=0;j<n-i-1;j++){
                if(arr[j]>arr[j+1]){
                    let temp=arr[j]
                    this.bubbleAnimations(arr[j],j,arr[j+1],j+1,i)
                    arr[j]=arr[j+1]
                    arr[j+1]=temp;
                }
            }
        }
    }
    ControlForHeap(){ 
        alert("Sorry we didn't finish heapSort");
        // var arr=this.state.arra;
        // this.heap_sort(arr)
        // console.log(arr);
    }
    //Leave For Some day
    // heapifyGreatLeft(left,largest,i){
    //     setTimeout(() => {
            
    //         var ali=document.getElementById(largest).style.backgroundColor=`yellow`
    //         var lii=document.getElementById(left).style.backgroundColor=`brown`
    //     }, i*100);
    // }
    // LastAnmtions(arrOfL,l,arrOfI,i){
    //     setTimeout(() => {
    //         var li=document.getElementById(i).style.height=`${arrOfL}px`
    //         var al=document.getElementById(l).style.height=`${arrOfI}px`
    //         var ali=document.getElementById(i).style.backgroundColor=`yellow`
    //         var lii=document.getElementById(l).style.backgroundColor=`yellow`
    //     }, i*100);
        
    // }

    // Heapify(arr,n,i){
    //     let largest=i;
    //     var l=2*i+1;
    //     var r=2*i+2;
    //     if(l<n && arr[largest]<arr[l]){
    //         this.heapifyGreatLeft(l,largest,i)
    //         largest=l
    //     }
    //     if(r<n && arr[largest]<arr[r]){
    //         largest=r
    //     }
    //     if(largest != i){
    //         let temp=arr[largest]
    //         arr[largest]=arr[i]
    //         var newt=document.getElementById(largest).style.height=`${arr[i]}px`
    //         arr[i]=temp;
    //         var newton=document.getElementById(i).style.height=`${arr[largest]}px`
    //         this.Heapify(arr,n,largest)
    //     }
    // }

    // heap_sort(arr){
    //     let n=arr.length;
    //     for(var i=Math.floor(n/2)-1;i>=0;i--){
    //         this.Heapify(arr,n,i)
    //     }
    //     for(var i=n;i>0;i--){
    //         let temp=arr[0]
    //         arr[0]=arr[i]
    //         var nybio= document.getElementById(0).style.height=`${arr[0]}px`
    //         arr[i]=temp;
    //         var nybio= document.getElementById(i).style.height=`${arr[i]}px`
    //         this.Heapify(arr,i,0)
    //     }
    // }
  render() {
    return (
      <>
      <h1>Sorting Visualizer</h1>
      <nav>
      <button onClick={()=>{
          this.componentDidWilling();
      }}>InsertionSort</button>

<button onClick={()=>{
          this.ControlForHeap();
      }}>HeapSort</button>

<button onClick={()=>{
          this.componentDidBubble();
      }}>BubbleSort</button>
      </nav>
   
      <div className="array">
          
      {this.state.arra.map((values,id)=>(<div key={id} id={id} style={{ margin:"1px",width:`2.5px`,height:`${values}px`,backgroundColor:"red"}}></div>))}
      </div>
      </>
    )
  }
}
