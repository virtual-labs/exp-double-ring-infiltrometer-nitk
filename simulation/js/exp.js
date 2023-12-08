var qCount = 0;
var rCount = 0;
var sCount = 0;
var tCount = 0;
var clkCount1 = 0;
var clkCount2 = 0;
var land;
// Prompt questions during simulation using objects
// Prompt questions during simulation using objects
var questions = {
	ans1:0,
	options:[],
	nextFunction:function(){},
	setOptions1:function(d1,d2,d3){
		questions.options = new Array(d1,d2,d3);
	},
	setAns:function(ans){
		questions.ans1 = ans;
	},
	frameQuestions:function(qun){
		var myDiv  = document.getElementById("question-div");
		var myDiv1 = document.getElementById("divq");
		// myDiv.style.visibility = "visible";
		myDiv.style.animation = "blinkingText 1s 1";
		myDiv.style.visibility = "visible";
		myDiv.classList.add("fadeIn");
			document.getElementById("divq").innerHTML = qun;
		//Create and append select list
		var selectList = document.createElement("select");
		selectList.setAttribute("id", "mySelect");
		selectList.setAttribute("autocomplete", "off");
		// selectList.setAttribute("onchange", "questions.setAnswer()");
		
		var button1 = document.createElement("input");
		button1.setAttribute("onclick","questions.setAnswer(this)");
		button1.setAttribute("type","button");
		button1.setAttribute("value","OK");
		button1.setAttribute("style","cursor:pointer");
	
		// Appending the contents to the division
		myDiv1.appendChild(selectList);
		myDiv1.appendChild(button1);

	//Create and append the options
		for (var i = 0; i < questions.options.length; i++) {
			var opt = document.createElement("option");
			opt.setAttribute("value", questions.options[i]);
			opt.text = questions.options[i];
			selectList.appendChild(opt);
		}
	},
	setAnswer:function(ev){
		var x = document.getElementById("mySelect");
		var i = x.selectedIndex;
		if(i == 0)
		{
			var dispAns = document.createElement("p");
			dispAns.innerHTML = "You have not selected any value";
			document.getElementById("divq").appendChild(dispAns);		
			setTimeout(function(){
				dispAns.innerHTML = "";
			},200);
		}
		else if(i == questions.ans1)
		{
			ev.onclick = "";
			var dispAns = document.createElement("p");
			dispAns.innerHTML = "You are right <span class='boldClass'>&#128077;</span> ";
			document.getElementById("divq").appendChild(dispAns);		
			questions.callNextFunction();
		}
		else
		{
			ev.onclick = "";
			var dispAns = document.createElement("p");
			dispAns.innerHTML = "You are Wrong <span class='boldClass'>&#128078;</span><br>Answer is: "+x.options[questions.ans1].text;
			document.getElementById("divq").appendChild(dispAns);		
			questions.callNextFunction();
		}
	},
	setCallBack:function(cb){
		nextFunction = cb;
	},
	callNextFunction:function()
	{
		setTimeout(function()
		{
			// document.getElementById("question-div").innerHTML = "";
			document.getElementById("question-div").style.animation="";
			document.getElementById("question-div").style.visibility = "hidden";
			nextFunction();
		},800);
	}
}

function navNext()
{
	for(temp=0;temp<=7;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}
//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
    if (document.getElementById('arrow1').style.visibility=="hidden")
        document.getElementById('arrow1').style.visibility="visible";
    else
        document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
    clearInterval(myInt);
    document.getElementById('arrow1').style.visibility="hidden";
}

function checkInputValid(e) {
	e.value = e.value.match(/\d*(\.\d*)?/)[0];
}

function magic() {
	if (simsubscreennum == 1) {
		document.getElementById("grassland").onclick = function() {
			land = "grassland";
	        document.getElementById("nextButton").style.visibility="visible";
			document.getElementById("1-0").setAttribute("src", "images/grassland1.png");
			document.getElementById("1-0").style.height="112px";
			document.getElementById("1-0").style.top="400px";
		}
		document.getElementById("barren").onclick = function() {
			land = "barrenland";
	        document.getElementById("nextButton").style.visibility="visible";
			document.getElementById("1-0").setAttribute("src", "images/barrenland.png");
			document.getElementById("1-0").style.height="110px";
			document.getElementById("1-0").style.top="400px";
		}
	}
	else if (simsubscreennum == 2) {
		document.getElementById("1-0").style.visibility="visible";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:710px; top:170px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
		document.getElementById("1-5").onclick=function() {
		    myStopFunction();
			document.getElementById("1-5").onclick="";
			document.getElementById("1-5").style.animation="moveinnerring 2s forwards";
			setTimeout(function(){
				document.getElementById("1-5").style.visibility="hidden";
				document.getElementById("1-1").style.visibility="visible";
				setTimeout(function() {
					document.getElementById("1-2").style.visibility="visible";
					document.getElementById("1-2").style.transform="rotateX(-65deg)";
					myInt=setInterval(function(){animatearrow(); },600);
					document.getElementById("arrow1").style="visibility:visible; position:absolute; left:655px; top:100px; height:30px; z-index:10;";
					document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)"
					document.getElementById("arrow1").style.msTransform="rotate(270deg)"
					document.getElementById("arrow1").style.transform="rotate(270deg)"
					document.getElementById("1-2").onclick=function() {
						myStopFunction();
						document.getElementById("1-2").onclick="";
						document.getElementById("1-2").style.animation = "moveplate 2s forwards";
						setTimeout(function(){
							document.getElementById("1-2").style.visibility="hidden";
							document.getElementById("1-3").style.visibility="visible";
							document.getElementById("1-3").style.transform="rotateX(-55deg)";
							setTimeout(function(){
								myInt=setInterval(function(){animatearrow(); },600);
								document.getElementById("arrow1").style="visibility:visible; position:absolute; left:730px; top:160px; height:30px; z-index:10;";
								document.getElementById("arrow1").style.WebkitTransform="rotate(360deg)"
								document.getElementById("arrow1").style.msTransform="rotate(360deg)"
								document.getElementById("arrow1").style.transform="rotate(360deg)"
								document.getElementById("1-4").style.visibility="visible";
								document.getElementById("1-4").onclick=function() {
									myStopFunction();
									document.getElementById("1-4").onclick="";
									document.getElementById("1-4").style.transform="rotate(-45deg)";
									document.getElementById("1-4").style.animation = "movehammer 2.5s forwards";
									setTimeout(function(){
										document.getElementById("1-4").style.animation = "hammerit 1s 5";
										document.getElementById("1-1").style.animation = "movedown1 4s forwards";
										document.getElementById("1-3").style.animation = "movedown2 4s forwards";
										setTimeout(function(){
											document.getElementById("1-4").style.visibility="hidden";
											myInt=setInterval(function(){animatearrow(); },500);
											document.getElementById("arrow1").style="visibility:visible; position:absolute; left:200px; top:375px; height:30px; z-index:10;";
											document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)"
											document.getElementById("arrow1").style.msTransform="rotate(180deg)"
											document.getElementById("arrow1").style.transform="rotate(180deg)"
											document.getElementById("1-3").onclick = function() {
												myStopFunction();
												document.getElementById("1-3").onclick="";
												document.getElementById("1-3").style.animation = "removeplate 1s forwards";
												setTimeout(function(){
													document.getElementById("1-3").style.visibility="hidden";
													setTimeout(function(){
														var q1 = Object.create(questions);
														generateQuestion1(q1,"For infiltration test the land should be: "," ","Sloping","Plain",2,screen2Proceed,250,150,250,150);
													},500);
												},1500)
											}
										},4000)
									},1750)
								}
							},750)
						},1500)
					}
				},1750)
			},1500)
		}
	}
	else if (simsubscreennum == 3) {
		document.getElementById("1-1").style.visibility="hidden";
		setTimeout(function(){
			myInt=setInterval(function(){animatearrow();},500);
		    document.getElementById("arrow1").style="visibility:visible; position:absolute; left:690px; top:250px; height:30px; z-index:10;";
		    document.getElementById("arrow1").style.WebkitTransform="rotate(90deg)"
		    document.getElementById("arrow1").style.msTransform="rotate(90deg)"
		    document.getElementById("arrow1").style.transform="rotate(90deg)"
		    document.getElementById("2-2").style.visibility="visible";
		    document.getElementById("2-2").onclick=function()
		    {
			    myStopFunction();
			    document.getElementById("2-2").onclick="";
			    document.getElementById("2-2").style.animation = "moveouterring 2s forwards";
			    setTimeout(function(){
					document.getElementById("2-1").style.visibility="hidden";
				    document.getElementById("2-2").style.visibility="hidden";
				    document.getElementById("2-3").style.visibility="visible";
				    setTimeout(function(){
					    document.getElementById("2-4").style.visibility="visible";
						document.getElementById("2-4").style.transform="rotateX(-55deg)";
				        myInt=setInterval(function(){animatearrow(); },600);
			    	    document.getElementById("arrow1").style="visibility:visible; position:absolute; left:650px; top:95px; height:30px; z-index:10;";
			    	    document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)"
			    	    document.getElementById("arrow1").style.msTransform="rotate(270deg)"
					    document.getElementById("arrow1").style.transform="rotate(270deg)"
			    	    document.getElementById("2-4").onclick=function() {
				    	    myStopFunction();
						    document.getElementById("2-4").onclick="";
						    document.getElementById("2-4").style.animation = "moveplate2 2s forwards";
						    setTimeout(function() {
							document.getElementById("2-4").style.visibility ="hidden";
					    	document.getElementById("2-5").style.visibility="visible";
							document.getElementById("2-5").style.transform="rotateX(-55deg)";
							setTimeout(function(){
								myInt=setInterval(function(){animatearrow(); },600);
								document.getElementById("arrow1").style="visibility:visible; position:absolute; left:740px; top:130px; height:30px; z-index:10;";
								document.getElementById("arrow1").style.WebkitTransform="rotate(360deg)"
								document.getElementById("arrow1").style.msTransform="rotate(360deg)"
								document.getElementById("arrow1").style.transform="rotate(360deg)"
								document.getElementById("2-6").style.visibility="visible";
								document.getElementById("2-6").onclick=function() {
									myStopFunction();
									document.getElementById("2-6").onclick="";
									document.getElementById("2-6").style.transform="rotate(-55deg)";
									document.getElementById("2-6").style.animation = "movehammer2 2.5s forwards";
									setTimeout(function(){
										document.getElementById("2-6").style.animation = "hammerit2 1s 5";
									    document.getElementById("2-3").style.animation = "infiltrometerdown1 4s forwards";
									    document.getElementById("2-5").style.animation = "infiltrometerdown2 4s forwards";
									    setTimeout(function(){
										    document.getElementById("2-6").style.visibility="hidden";
										    myInt=setInterval(function(){animatearrow(); },500);
									        document.getElementById("arrow1").style="visibility:visible; position:absolute; left:170px; top:395px; height:30px; z-index:10;";
									        document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)"
									        document.getElementById("arrow1").style.msTransform="rotate(180deg)"
									        document.getElementById("arrow1").style.transform="rotate(180deg)"
									        document.getElementById("2-5").onclick = function() {
										        myStopFunction();
										        document.getElementById("2-5").onclick="";
										        document.getElementById("2-5").style.animation = "removeplate 1s forwards";
										        setTimeout(function(){
											        document.getElementById("2-5").style.visibility="hidden";
											        document.getElementById("nextButton").style.visibility="visible";
										        },1250)
									        }
									    },4000)
									},1500)
								}
						    },750)
				        },1500)
				    }
				},1000)
			},2000)
		}
		},500)
	}
	else if (simsubscreennum == 4) {
		setTimeout(function(){
			document.getElementById("3-2").style.visibility="visible";
			myInt=setInterval(function(){animatearrow(); },600);
			document.getElementById("arrow1").style="visibility:visible; position:absolute; left:630px; top:95px; height:30px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)"
			document.getElementById("arrow1").style.msTransform="rotate(270deg)"
			document.getElementById("arrow1").style.transform="rotate(270deg)"
			document.getElementById("3-2").onclick=function() {
			    myStopFunction();
			    document.getElementById("3-2").onclick="";
				document.getElementById("3-2").style.animation = "movestand 2s forwards";
				setTimeout(function(){
					document.getElementById("3-1").style.visibility="hidden";
					document.getElementById("3-2").style.visibility="hidden";
					document.getElementById("3-3").style.visibility="visible";
					setTimeout(function(){
						myInt=setInterval(function(){animatearrow(); },600);
			            document.getElementById("arrow1").style="visibility:visible; position:absolute; left:640px; top:400px; height:30px; z-index:10;";
			            document.getElementById("arrow1").style.WebkitTransform="rotate(360deg)"
			            document.getElementById("arrow1").style.msTransform="rotate(360deg)"
			            document.getElementById("arrow1").style.transform="rotate(360deg)"
			            document.getElementById("3-3").onclick=function() {
			                myStopFunction();
			                document.getElementById("3-3").onclick="";
							document.getElementById("3-3").style.visibility="hidden";
							document.getElementById("3-5").style.visibility="visible";
				            document.getElementById("3-5").style.animation = "movescalestand 2s linear forwards";
							setTimeout(function(){
								document.getElementById("2-3").style.visibility="hidden";
								document.getElementById("3-5").style.visibility="hidden";
								document.getElementById("3-4").style.visibility="visible";
								setTimeout(function(){
									document.getElementById("nextButton").style.visibility="visible";
								},750)
							},1700)
						}
					},1650)
				},2000)
			}
		},1000)
	}
	else if (simsubscreennum == 5) {
		document.getElementById("3-4").style.visibility="hidden";
		document.getElementById("4-5").style.visibility="visible";
		setTimeout(function(){
			myInt=setInterval(function(){animatearrow(); },600);
			document.getElementById("arrow1").style="visibility:visible; position:absolute; left:680px; top:260px; height:30px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)"
			document.getElementById("arrow1").style.msTransform="rotate(270deg)"
			document.getElementById("arrow1").style.transform="rotate(270deg)"
			document.getElementById("4-1").style.visibility="visible";
			document.getElementById("4-1").onclick=function() {
				myStopFunction();
				document.getElementById("4-1").onclick="";
				document.getElementById("4-1").style.animation="movebucket 2s forwards";
				setTimeout(function() {
					document.getElementById("4-1").style.visibility="hidden";
					document.getElementById("4-4").style.visibility="visible";
					document.getElementById("4-4").style.animation="rotatebucket 3s 1 linear";
					setTimeout(function() {
						document.getElementById("4-2").style.visibility="visible";
						document.getElementById("4-3").style.visibility="visible";
						document.getElementById("4-3").style.animation="fillwater 2s forwards";
					    setTimeout(function(){
							document.getElementById("4-2").style.visibility="hidden";
							document.getElementById("4-4").style.visibility="hidden";
							setTimeout(function(){
								var q2 = Object.create(questions);
								generateQuestion1(q2,"Why water level in both rings should be equal to minimize: "," ","Later flow","Longitudinal flow",1,screen5Proceed,250,150,250,150);
							},1500)
						},1500)
					},1500)
			    },1200)
			}
		},1000)
	}
	else if (simsubscreennum == 6) {
		if (land == "grassland") {
			setTimeout(function(){
				myInt=setInterval(function(){animatearrow(); },600);
				document.getElementById("arrow1").style="visibility:visible; position:absolute; left:750px; top:120px; height:30px; z-index:10;";
				document.getElementById("arrow1").style.WebkitTransform="rotate(360deg)"
				document.getElementById("arrow1").style.msTransform="rotate(360deg)"
				document.getElementById("arrow1").style.transform="rotate(360deg)"
				document.getElementById("5-1").style.visibility="visible";
				document.getElementById("5-2").style.visibility="visible";
				document.getElementById("5-4").style.visibility="visible";
				document.getElementById("5-1").onclick=function() {
					myStopFunction();
					document.getElementById("5-1").onclick="";
					document.getElementById("5-1").style.animation="movehand 1s forwards";
					setTimeout(function(){
						document.getElementById("5-2").style.visibility="hidden";
						document.getElementById("5-3").style.visibility="visible";
						document.getElementById("5-1").style.visibility="hidden";
						document.getElementById("5-4").style.animation = "startticking 35s linear infinite";
						document.getElementById("4-3").style.animation="removewater 25s forwards";
						setTimeout(function() {
							document.getElementById("5-6").style.visibility="visible";
							document.getElementById("dataTable1").style.visibility="visible";
							document.getElementById("g-1").style.visibility="visible";
							setTimeout(function() {
								document.getElementById("g-2").style.visibility="visible";
								setTimeout(function() {
									document.getElementById("g-3").style.visibility="visible";
								    setTimeout(function() {
										document.getElementById("g-4").style.visibility="visible";
									    setTimeout(function() {
											document.getElementById("g-5").style.visibility="visible";
										    setTimeout(function() {
												document.getElementById("g-6").style.visibility="visible";
											    setTimeout(function() {
													document.getElementById("g-7").style.visibility="visible";
												    setTimeout(function() {
														document.getElementById("g-8").style.visibility="visible";
														setTimeout(function(){
															myInt=setInterval(function(){animatearrow(); },600);
															document.getElementById("arrow1").style="visibility:visible; position:absolute; left:680px; top:265px; height:30px; z-index:10;";
															document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)"
															document.getElementById("arrow1").style.msTransform="rotate(270deg)"
															document.getElementById("arrow1").style.transform="rotate(270deg)"
															document.getElementById("5-5").style.visibility="visible";
															document.getElementById("5-5").onclick=function() {
																myStopFunction();
																document.getElementById("5-5").onclick="";
																document.getElementById("5-5").style.animation="movebucket 2s forwards";
																setTimeout(function() {
																	document.getElementById("5-5").style.visibility="hidden";
																	document.getElementById("4-4").style.visibility="visible";
																	document.getElementById("4-4").style.animation="rotatebucket 2s 1 linear";
																	setTimeout(function() {
																		document.getElementById("4-2").style.visibility="visible";
																		document.getElementById("4-3").style.visibility="visible";
																		document.getElementById("4-3").style.animation="fillwater 2s forwards";
																		setTimeout(function(){
																			document.getElementById("4-2").style.visibility="hidden";
																			document.getElementById("4-4").style.visibility="hidden";
																			document.getElementById("4-3").style.animation="removewater 30s forwards";
																			setTimeout(function() {
																				document.getElementById("g-9").style.visibility="visible";
																				setTimeout(function() {
																					document.getElementById("g-10").style.visibility="visible";
																					setTimeout(function() {
																						document.getElementById("g-11").style.visibility="visible";
																						setTimeout(function() {
																							document.getElementById("g-12").style.visibility="visible";
																							setTimeout(function() {
																								document.getElementById("g-13").style.visibility="visible";
																								setTimeout(function() {
																									document.getElementById("g-14").style.visibility="visible";
																									setTimeout(function() {
																										document.getElementById("g-15").style.visibility="visible";
																										setTimeout(function() {
																											document.getElementById("g-16").style.visibility="visible";
																											setTimeout(function(){
																												document.getElementById("nextButton").style.visibility="visible";
																											},500)
																										},2000)
																									},2000)
																								},2000)
																							},2000)
																						},2000)
																					},2000)
																				},2000)
																			},1900)
																		},1500)
																	},1000)
																},1200)
															}
														},1000)
													},2000)
												},2000)
											},2000)
										},2000)
									},1200)
								},800)
							},800)
						},200)
					},1500)
				}
			},750)
		}
		else if (land == "barrenland") {
			setTimeout(function(){
				myInt=setInterval(function(){animatearrow(); },600);
				document.getElementById("arrow1").style="visibility:visible; position:absolute; left:750px; top:120px; height:30px; z-index:10;";
				document.getElementById("arrow1").style.WebkitTransform="rotate(360deg)"
				document.getElementById("arrow1").style.msTransform="rotate(360deg)"
				document.getElementById("arrow1").style.transform="rotate(360deg)"
				document.getElementById("5-1").style.visibility="visible";
				document.getElementById("5-2").style.visibility="visible";
				document.getElementById("5-4").style.visibility="visible";
				document.getElementById("5-1").onclick=function() {
					myStopFunction();
					document.getElementById("5-1").onclick="";
					document.getElementById("5-1").style.animation="movehand 1s forwards";
					setTimeout(function(){
						document.getElementById("5-2").style.visibility="hidden";
						document.getElementById("5-3").style.visibility="visible";
						document.getElementById("5-1").style.visibility="hidden";
						document.getElementById("5-4").style.animation = "startticking 35s linear infinite";
						document.getElementById("4-3").style.animation="removewater 25s forwards";
						setTimeout(function() {
							document.getElementById("5-7").style.visibility="visible";
							document.getElementById("dataTable2").style.visibility="visible";
							document.getElementById("b-1").style.visibility="visible";
							setTimeout(function() {
								document.getElementById("b-2").style.visibility="visible";
								setTimeout(function() {
									document.getElementById("b-3").style.visibility="visible";
								    setTimeout(function() {
										document.getElementById("b-4").style.visibility="visible";
									    setTimeout(function() {
											document.getElementById("b-5").style.visibility="visible";
										    setTimeout(function() {
												document.getElementById("b-6").style.visibility="visible";
											    setTimeout(function() {
													document.getElementById("b-7").style.visibility="visible";
												    setTimeout(function() {
														document.getElementById("b-8").style.visibility="visible";
														setTimeout(function(){
															myInt=setInterval(function(){animatearrow(); },600);
															document.getElementById("arrow1").style="visibility:visible; position:absolute; left:680px; top:265px; height:30px; z-index:10;";
															document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)"
															document.getElementById("arrow1").style.msTransform="rotate(270deg)"
															document.getElementById("arrow1").style.transform="rotate(270deg)"
															document.getElementById("5-5").style.visibility="visible";
															document.getElementById("5-5").onclick=function() {
																myStopFunction();
																document.getElementById("5-5").onclick="";
																document.getElementById("5-5").style.animation="movebucket 2s forwards";
																setTimeout(function() {
																	document.getElementById("5-5").style.visibility="hidden";
																	document.getElementById("4-4").style.visibility="visible";
																	document.getElementById("4-4").style.animation="rotatebucket 2s 1 linear";
																	setTimeout(function() {
																		document.getElementById("4-2").style.visibility="visible";
																		document.getElementById("4-3").style.visibility="visible";
																		document.getElementById("4-3").style.animation="fillwater 2s forwards";
																		setTimeout(function(){
																			document.getElementById("4-2").style.visibility="hidden";
																			document.getElementById("4-4").style.visibility="hidden";
																			document.getElementById("4-3").style.animation="removewater 30s forwards";
																			setTimeout(function() {
																				document.getElementById("b-9").style.visibility="visible";
																				setTimeout(function() {
																					document.getElementById("b-10").style.visibility="visible";
																					setTimeout(function() {
																						document.getElementById("b-11").style.visibility="visible";
																						setTimeout(function() {
																							document.getElementById("b-12").style.visibility="visible";
																							setTimeout(function() {
																								document.getElementById("b-13").style.visibility="visible";
																								setTimeout(function() {
																									document.getElementById("b-14").style.visibility="visible";
																									setTimeout(function() {
																										document.getElementById("b-15").style.visibility="visible";
																										setTimeout(function() {
																											document.getElementById("b-16").style.visibility="visible";
																											setTimeout(function(){
																												document.getElementById("nextButton").style.visibility="visible";
																											},500)	
																										},2000)
																									},2000)
																								},2000)
																							},2000)
																						},2000)
																					},2000)
																				},2000)
																			},1900)
																		},1500)
																	},1000)
																},1200)
															}
														},1000)
													},2000)
												},2000)
											},2000)
										},2000)
									},1200)
								},800)
							},800)
						},200)
					},1500)
				}
			},750)
		}
	}
	else if (simsubscreennum == 7) {
		if (land == "grassland") {
			document.getElementById("1-0").style.visibility="hidden";
			document.getElementById("4-3").style.visibility="hidden";
			document.getElementById("4-5").style.visibility="hidden";
			document.getElementById("5-3").style.visibility="hidden";
			document.getElementById("5-4").style.visibility="hidden";
			document.getElementById("5-6").style.visibility="hidden";
			document.getElementById("dataTable1").style.visibility="hidden";
			document.getElementById("g-1").style.visibility="hidden";
			document.getElementById("g-2").style.visibility="hidden";
			document.getElementById("g-3").style.visibility="hidden";
			document.getElementById("g-4").style.visibility="hidden";
			document.getElementById("g-5").style.visibility="hidden";
			document.getElementById("g-6").style.visibility="hidden";
			document.getElementById("g-7").style.visibility="hidden";
			document.getElementById("g-8").style.visibility="hidden";
			document.getElementById("g-9").style.visibility="hidden";
			document.getElementById("g-10").style.visibility="hidden";
			document.getElementById("g-11").style.visibility="hidden";
			document.getElementById("g-12").style.visibility="hidden";
			document.getElementById("g-13").style.visibility="hidden";
			document.getElementById("g-14").style.visibility="hidden";
			document.getElementById("g-15").style.visibility="hidden";
			document.getElementById("g-16").style.visibility="hidden";
			document.getElementById("6-1").style.visibility="visible";
			document.getElementById("btn1").style.visibility="visible";
		}
		else if (land == "barrenland") {
			document.getElementById("1-0").style.visibility="hidden";
			document.getElementById("4-3").style.visibility="hidden";
			document.getElementById("4-5").style.visibility="hidden";
			document.getElementById("5-3").style.visibility="hidden";
			document.getElementById("5-4").style.visibility="hidden";
			document.getElementById("5-7").style.visibility="hidden";
			document.getElementById("dataTable2").style.visibility="hidden";
			document.getElementById("b-1").style.visibility="hidden";
			document.getElementById("b-2").style.visibility="hidden";
			document.getElementById("b-3").style.visibility="hidden";
			document.getElementById("b-4").style.visibility="hidden";
			document.getElementById("b-5").style.visibility="hidden";
			document.getElementById("b-6").style.visibility="hidden";
			document.getElementById("b-7").style.visibility="hidden";
			document.getElementById("b-8").style.visibility="hidden";
			document.getElementById("b-9").style.visibility="hidden";
			document.getElementById("b-10").style.visibility="hidden";
			document.getElementById("b-11").style.visibility="hidden";
			document.getElementById("b-12").style.visibility="hidden";
			document.getElementById("b-13").style.visibility="hidden";
			document.getElementById("b-14").style.visibility="hidden";
			document.getElementById("b-15").style.visibility="hidden";
			document.getElementById("b-16").style.visibility="hidden";
			document.getElementById("6-2").style.visibility="visible";
			document.getElementById("btn2").style.visibility="visible";
		}
	}
}

let arr1 = ["2.9", "2.9", "2.8", "5.7", "2.3", "8.0", "2.0", "10", "1.8", "11.8", "1.7", "13.5", "1.58", "15.08", "1.48", "16.56", "1.40", "17.96", "1.34", "19.3", "1.22", "20.52","1.1", "21.62", "1.0", "22.62", "0.9", "23.52", "0.88", "24.4"];
function checkInput1() {
	let inputs = [document.getElementById("gi-11"), document.getElementById("gi-12"), document.getElementById("gi-13"), document.getElementById("gi-14"), document.getElementById("gi-15"), document.getElementById("gi-16"), document.getElementById("gi-17"), document.getElementById("gi-18"), document.getElementById("gi-19"), document.getElementById("gi-20"), document.getElementById("gi-21"), document.getElementById("gi-22"), document.getElementById("gi-23"), document.getElementById("gi-24"), document.getElementById("gi-25"), document.getElementById("gi-26"), document.getElementById("gi-27"), document.getElementById("gi-28"), document.getElementById("gi-29"), document.getElementById("gi-30"), document.getElementById("gi-31"), document.getElementById("gi-32"), document.getElementById("gi-33"), document.getElementById("gi-34"), document.getElementById("gi-35"), document.getElementById("gi-36"), document.getElementById("gi-37"), document.getElementById("gi-38"), document.getElementById("gi-39"), document.getElementById("gi-40")];
	let anyInputEmpty = false;
	for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
			anyInputEmpty = true;
            document.getElementById("alerttxt").style.visibility="visible";
        }
    }
	if (anyInputEmpty) {
        return;
    }
	document.getElementById("alerttxt").style.visibility="hidden";
	clkCount1++;
	let allInputsCorrect = true;
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].value === arr1[i]) {
		    inputs[i].style.color = "green";
		} else {
			allInputsCorrect = false;
		    inputs[i].style.color = "red";
		}
		setTimeout(() => {
			inputs[i].style.color = "black";
		}, 3000);
	}
	if (clkCount1 == 2) {
		document.getElementById("btn1").style.visibility="hidden";
		document.getElementById("resbtn1").style.visibility = "visible";
	}
	if (allInputsCorrect) {
        document.getElementById("iv").style.visibility = "visible";
        document.getElementById("itv").style.visibility = "visible";
        document.getElementById("iv1").style.visibility = "visible";
        document.getElementById("itv1").style.visibility = "visible";
        document.getElementById("btn1").style.visibility = "hidden";
        document.getElementById("resbtn1").style.visibility = "hidden";
    }
}
function getResult1() {
	let inputs = [document.getElementById("gi-11"), document.getElementById("gi-12"), document.getElementById("gi-13"), document.getElementById("gi-14"), document.getElementById("gi-15"), document.getElementById("gi-16"), document.getElementById("gi-17"), document.getElementById("gi-18"), document.getElementById("gi-19"), document.getElementById("gi-20"), document.getElementById("gi-21"), document.getElementById("gi-22"), document.getElementById("gi-23"), document.getElementById("gi-24"), document.getElementById("gi-25"), document.getElementById("gi-26"), document.getElementById("gi-27"), document.getElementById("gi-28"), document.getElementById("gi-29"), document.getElementById("gi-30"), document.getElementById("gi-31"), document.getElementById("gi-32"), document.getElementById("gi-33"), document.getElementById("gi-34"), document.getElementById("gi-35"), document.getElementById("gi-36"), document.getElementById("gi-37"), document.getElementById("gi-38"), document.getElementById("gi-39"), document.getElementById("gi-40")];
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = arr1[i];
    }
	document.getElementById("resbtn1").style.visibility = "hidden";
	document.getElementById("iv").style.visibility="visible";
	document.getElementById("itv").style.visibility="visible";
	document.getElementById("iv1").style.visibility="visible";
	document.getElementById("itv1").style.visibility="visible";
}

let arr2 = ["2.10", "2.10", "1.91", "4.01", "1.80", "5.81", "1.71", "7.52", "1.52", "9.04", "1.35", "10.39", "1.21", "11.6", "1.01", "12.61", "0.93", "13.54", "0.88", "14.42", "0.84", "15.26", "0.72", "15.98", "0.65", "16.63", "0.58", "17.21", "0.57", "17.78"];
function checkInput2() {
	let inputs1 = [document.getElementById("bi-11"), document.getElementById("bi-12"), document.getElementById("bi-13"), document.getElementById("bi-14"), document.getElementById("bi-15"), document.getElementById("bi-16"), document.getElementById("bi-17"), document.getElementById("bi-18"), document.getElementById("bi-19"), document.getElementById("bi-20"), document.getElementById("bi-21"), document.getElementById("bi-22"), document.getElementById("bi-23"), document.getElementById("bi-24"), document.getElementById("bi-25"), document.getElementById("bi-26"), document.getElementById("bi-27"), document.getElementById("bi-28"), document.getElementById("bi-29"), document.getElementById("bi-30"), document.getElementById("bi-31"), document.getElementById("bi-32"), document.getElementById("bi-33"), document.getElementById("bi-34"), document.getElementById("bi-35"), document.getElementById("bi-36"), document.getElementById("bi-37"), document.getElementById("bi-38"), document.getElementById("bi-39"), document.getElementById("bi-40")];
    let anyInputEmpty = false;
	for (let i = 0; i < inputs1.length; i++) {
        if (inputs1[i].value === "") {
			anyInputEmpty = true;
            document.getElementById("alerttxt").style.visibility="visible";
        }
    }
	if (anyInputEmpty) {
        return;
    }
	document.getElementById("alerttxt").style.visibility="hidden";
	clkCount2++;
	let allInputs1Correct = true;
	for (let i = 0; i < inputs1.length; i++) {
		if (inputs1[i].value === arr2[i]) {
		    inputs1[i].style.color = "green";
		} else {
		    inputs1[i].style.color = "red";
			allInputs1Correct = false;
		}
		setTimeout(() => {
			inputs1[i].style.color = "black";
		}, 3000);
	}
	if (clkCount2 == 2) {
		document.getElementById("btn2").style.visibility="hidden";
		document.getElementById("resbtn2").style.visibility = "visible";
	}
	if (allInputs1Correct) {
        document.getElementById("iv2").style.visibility = "visible";
        document.getElementById("itv2").style.visibility = "visible";
        document.getElementById("iv3").style.visibility = "visible";
        document.getElementById("itv3").style.visibility = "visible";
        document.getElementById("btn2").style.visibility = "hidden";
        document.getElementById("resbtn2").style.visibility = "hidden";
    }
}
function getResult2() {
	let inputs1 = [document.getElementById("bi-11"), document.getElementById("bi-12"), document.getElementById("bi-13"), document.getElementById("bi-14"), document.getElementById("bi-15"), document.getElementById("bi-16"), document.getElementById("bi-17"), document.getElementById("bi-18"), document.getElementById("bi-19"), document.getElementById("bi-20"), document.getElementById("bi-21"), document.getElementById("bi-22"), document.getElementById("bi-23"), document.getElementById("bi-24"), document.getElementById("bi-25"), document.getElementById("bi-26"), document.getElementById("bi-27"), document.getElementById("bi-28"), document.getElementById("bi-29"), document.getElementById("bi-30"), document.getElementById("bi-31"), document.getElementById("bi-32"), document.getElementById("bi-33"), document.getElementById("bi-34"), document.getElementById("bi-35"), document.getElementById("bi-36"), document.getElementById("bi-37"), document.getElementById("bi-38"), document.getElementById("bi-39"), document.getElementById("bi-40")];
    for (let i = 0; i < inputs1.length; i++) {
        inputs1[i].value = arr2[i];
    }
	document.getElementById("resbtn2").style.visibility = "hidden";
	document.getElementById("iv2").style.visibility="visible";
	document.getElementById("itv2").style.visibility="visible";
	document.getElementById("iv3").style.visibility="visible";
	document.getElementById("itv3").style.visibility="visible";
}

function checkResult()
{
	var idd = document.getElementById("res");
	var idd1 = document.getElementById("chk");
	var ansId = document.getElementById("rightAns");
	document.getElementById("alertId").style.visibility = "hidden";
	document.getElementById("alertId").style.animation = "";
	if(!idd.value  || !idd.value!=" ")
	{
		document.getElementById("alertId").style.visibility = "visible";
		document.getElementById("alertId").style.animation = "blink_effect 1s infinite";
	}
	else if (idd.value == 24.4)
	{
		idd1.style.visibility = "hidden";
		idd.parentNode.removeChild(idd);
		ansId.classList.add("resultStyle");
		ansId.style.color = "black";
		ansId.innerHTML= 24.4 +"cm<span style='color:green'>&#10004;</span>";
		document.getElementById("inf").style.visibility = "visible";
	}
	else
	{
		qCount++;
		blinkStop();
		idd.style.borderColor = "red";
		ansId.style.color = "red";
		ansId.innerHTML= "&#10008;";
		ansId.classList.remove("resultStyle");
		if(qCount == 2)
		{
			idd1.value = "RESULT";
		}
		if(qCount == 3)
		{
			idd1.style.visibility = "hidden";
			idd.parentNode.removeChild(idd);
			ansId.classList.add("resultStyle");
			ansId.style.color = "black";
			ansId.innerHTML= 24.4+"cm";
			document.getElementById("inf").style.visibility = "visible";
		}
	}
}
function blinkStop()
{
	document.getElementById("alertId").style.visibility = "hidden";
	document.getElementById("alertId").style.animation = "";
}
function checkResult1()
{
	var icc = document.getElementById("res1");
	var icc1 = document.getElementById("chk1");
	var ansId1 = document.getElementById("rightAns1");
	document.getElementById("alertId1").style.visibility = "hidden";
	document.getElementById("alertId1").style.animation = "";
	if(!icc.value  || !icc.value!=" ")
	{
		document.getElementById("alertId1").style.visibility = "visible";
		document.getElementById("alertId1").style.animation = "blink_effect 1s infinite";
	}
	else if (icc.value == 1.63)
	{
		icc1.style.visibility = "hidden";
		icc.parentNode.removeChild(icc);
		ansId1.classList.add("resultStyle");
		ansId1.style.color = "black";
		ansId1.innerHTML= 1.63 +"cm/min<span style='color:green'>&#10004;</span>";
	}
	else
	{
		rCount++;
		blinkStop1();
		icc.style.borderColor = "red";
		ansId1.style.color = "red";
		ansId1.innerHTML= "&#10008;";
		ansId1.classList.remove("resultStyle");
		if(rCount == 2)
		{
			icc1.value = "RESULT";
		}
		if(rCount == 3)
		{
			icc1.style.visibility = "hidden";
			icc.parentNode.removeChild(icc);
			ansId1.classList.add("resultStyle");
			ansId1.style.color = "black";
			ansId1.innerHTML= 1.63+"cm/min";
		}
	}
}
function blinkStop1()
{
	document.getElementById("alertId1").style.visibility = "hidden";
	document.getElementById("alertId1").style.animation = "";
}
function checkResult2()
{
	var ibb = document.getElementById("res2");
	var ibb1 = document.getElementById("chk2");
	var ansId2 = document.getElementById("rightAns2");
	document.getElementById("alertId2").style.visibility = "hidden";
	document.getElementById("alertId2").style.animation = "";
	if(!ibb.value  || !ibb.value!=" ")
	{
		document.getElementById("alertId2").style.visibility = "visible";
		document.getElementById("alertId2").style.animation = "blink_effect 1s infinite";
	}
	else if (ibb.value == 17.78)
	{
		ibb1.style.visibility = "hidden";
		ibb.parentNode.removeChild(ibb);
		ansId2.classList.add("resultStyle");
		ansId2.style.color = "black";
		ansId2.innerHTML= 17.78 +"cm<span style='color:green'>&#10004;</span>";
		document.getElementById("inf").style.visibility = "visible";
	}
	else
	{
		sCount++;
		blinkStop2();
		ibb.style.borderColor = "red";
		ansId2.style.color = "red";
		ansId2.innerHTML= "&#10008;";
		ansId2.classList.remove("resultStyle");
		if(sCount == 2)
		{
			ibb1.value = "RESULT";
		}
		if(sCount == 3)
		{
			ibb1.style.visibility = "hidden";
			ibb.parentNode.removeChild(ibb);
			ansId2.classList.add("resultStyle");
			ansId2.style.color = "black";
			ansId2.innerHTML= 17.78+"cm";
			document.getElementById("inf").style.visibility = "visible";
		}
	}
}
function blinkStop2()
{
	document.getElementById("alertId2").style.visibility = "hidden";
	document.getElementById("alertId2").style.animation = "";
}
function checkResult3()
{
	var igg = document.getElementById("res3");
	var igg1 = document.getElementById("chk3");
	var ansId3 = document.getElementById("rightAns3");
	document.getElementById("alertId3").style.visibility = "hidden";
	document.getElementById("alertId3").style.animation = "";
	if(!igg.value  || !igg.value!=" ")
	{
		document.getElementById("alertId3").style.visibility = "visible";
		document.getElementById("alertId3").style.animation = "blink_effect 1s infinite";
	}
	else if (igg.value == 1.18)
	{
		igg1.style.visibility = "hidden";
		igg.parentNode.removeChild(igg);
		ansId3.classList.add("resultStyle");
		ansId3.style.color = "black";
		ansId3.innerHTML= 1.18 +"cm/min<span style='color:green'>&#10004;</span>";
	}
	else
	{
		tCount++;
		blinkStop3();
		igg.style.borderColor = "red";
		ansId3.style.color = "red";
		ansId3.innerHTML= "&#10008;";
		ansId3.classList.remove("resultStyle");
		if(tCount == 2)
		{
			igg1.value = "RESULT";
		}
		if(tCount == 3)
		{
			igg1.style.visibility = "hidden";
			igg.parentNode.removeChild(igg);
			ansId3.classList.add("resultStyle");
			ansId3.style.color = "black";
			ansId3.innerHTML= 1.18+"cm/min";
		}
	}
}
function blinkStop3()
{
	document.getElementById("alertId3").style.visibility = "hidden";
	document.getElementById("alertId3").style.animation = "";
}
//To set the questions division
function generateQuestion1(qObject,qn,op1,op2,op3,ansKey,fn,dleft,dright,dwidth,dheight)
{
	document.getElementById('question-div').style.left=dleft+"px";											
	document.getElementById('question-div').style.top=dright+"px";												
	document.getElementById('question-div').style.width=dwidth+"px";
	document.getElementById('question-div').style.height=dheight+"px";
	qObject.setOptions1(op1,op2,op3);
	qObject.setAns(ansKey);
	qObject.frameQuestions(qn);	
	qObject.setCallBack(fn);	
}

function screen2Proceed(){
	document.getElementById("nextButton").style.visibility="visible";
}
function screen5Proceed(){
	document.getElementById("nextButton").style.visibility="visible";
}