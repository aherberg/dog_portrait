function setup() {
  createCanvas(650, 807);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background('white');
  
  fill('yellow');
  rect(325, 404, 630, 787);
  
  fill(255);
  quad(30, 40, 630, 50, 608, 766, 42, 777);
  
  noStroke();
  
  // vertical line grey
  fill(233,232,230);
  beginShape();
  vertex(93, 47);
  vertex(100, 49);
  vertex(104, 141);
  vertex(110, 185);
  vertex(106, 238);
  vertex(105, 461);
  vertex(111, 560);
  vertex(117, 641);
  vertex(108, 714);
  vertex(120, 800);
  vertex(110, 802);
  vertex(108, 714);
  vertex(117, 641);
  vertex(108, 560);
  vertex(100, 461);
  vertex(104, 238);
  vertex(108, 185);
  vertex(106, 141);
  vertex(99, 49);
  endShape(CLOSE);
  
  
  
  // dot 1
  fill('black');
  beginShape();
  vertex(96, 132);
  vertex(99, 132);
  vertex(101, 134);
  vertex(103, 136);
  vertex(104, 140);
  vertex(104, 143);
  vertex(104, 148);
  vertex(103, 151);
  vertex(100, 154);
  vertex(97, 157);
  vertex(94, 159);
  vertex(91, 160);
  vertex(88, 160);
  vertex(86, 160);
  vertex(82, 159);
  vertex(81, 157);
  vertex(81, 155);
  vertex(81, 151);
  vertex(82, 147);
  vertex(86, 143);
  vertex(90, 138);
  vertex(93, 134);
  endShape(CLOSE);
  
  // dot 2
  fill('black');
  beginShape();
  vertex(92, 308);
  vertex(95, 310);
  vertex(104, 319);
  vertex(105, 322);
  vertex(105, 326);
  vertex(104, 331);
  vertex(101, 333);
  vertex(98, 334);
  vertex(93, 333);
  vertex(89, 328);
  vertex(86, 322);
  vertex(85, 319);
  vertex(85, 314);
  vertex(88, 310);
  endShape(CLOSE);
  
  // dot 3
  fill('black');
  beginShape();
  vertex(93, 475);
  vertex(96, 475);
  vertex(98, 477);
  vertex(100, 481);
  vertex(100, 488);
  vertex(98, 496);
  vertex(96, 499);
  vertex(95, 503);
  vertex(92, 506);
  vertex(89, 506);
  vertex(84, 503);
  vertex(83, 499);
  vertex(83, 492);
  vertex(84, 488);
  vertex(86, 481);
  vertex(89, 477);
  endShape(CLOSE);
  
  // dot 4
  fill('black');
  beginShape();
  vertex(87, 606);
  vertex(92, 606);
  vertex(96, 608);
  vertex(100, 612);
  vertex(104, 620);
  vertex(105, 625);
  vertex(105, 630);
  vertex(103, 634);
  vertex(100, 635);
  vertex(96, 635);
  vertex(92, 634);
  vertex(86, 625);
  vertex(83, 620);
  vertex(83, 616);
  vertex(84, 612);
  vertex(86, 608);
  endShape(CLOSE);
  
  // dot 5
  fill('black');
  beginShape();
  vertex(97, 736);
  vertex(100, 736);
  vertex(102, 737);
  vertex(105, 740);
  vertex(106, 743);
  vertex(107, 747);
  vertex(107, 751);
  vertex(107, 753);
  vertex(105, 754);
  vertex(102, 754);
  vertex(100, 753);
  vertex(96, 747);
  vertex(95, 745);
  vertex(95, 742);
  vertex(95, 740);
  vertex(96, 737);
  endShape(CLOSE);
  
  // squiggle line shadow
  fill(170);
  beginShape();
  vertex(90, 58);
  vertex(74, 86);
  vertex(77, 87);
  vertex(77, 90);
  vertex(73, 90);
  vertex(64, 108);
  vertex(55, 132);
  vertex(52, 143);
  vertex(51, 163);
  vertex(55, 177);
  vertex(65, 193);
  vertex(75, 210);
  vertex(79, 220);
  vertex(79, 231);
  vertex(70, 257);
  vertex(64, 276);
  vertex(62, 284);
  vertex(56, 298);
  vertex(51, 319);
  vertex(49, 334);
  vertex(54, 353);
  vertex(72, 377);
  vertex(89, 394);
  vertex(92, 399);
  vertex(89, 408);
  vertex(74, 442);
  vertex(57, 483);
  vertex(51, 497);
  vertex(51, 506);
  vertex(54, 520);
  vertex(61, 531);
  vertex(74, 543);
  vertex(81, 558);
  vertex(80, 569);
  vertex(70, 583);
  vertex(65, 593);
  vertex(57, 602);
  vertex(51, 614);
  vertex(49, 627);
  vertex(52, 638);
  vertex(63, 650);
  vertex(75, 669);
  vertex(79, 682);
  vertex(75, 700);
  vertex(63, 720);
  vertex(58, 738);
  vertex(55, 750);
  vertex(67, 763);
  vertex(80, 772);
  vertex(90, 778);
  vertex(95, 775);
  vertex(96, 759);
  vertex(90, 756);
  vertex(60, 720);
  vertex(53, 738);
  vertex(70, 750);
  vertex(70, 738);
  vertex(84, 720);
  vertex(85, 700);
  vertex(90, 682);
  vertex(84, 669);
  vertex(72, 650);
  vertex(62, 638);
  vertex(60, 627);
  vertex(61, 614);
  vertex(67, 602);
  vertex(75, 593);
  vertex(80, 583);
  vertex(90, 569);
  vertex(91, 558);
  vertex(83, 543);
  vertex(70, 531);
  vertex(64, 520);
  vertex(62, 506);
  vertex(61, 497);
  vertex(68, 483);
  vertex(83, 442);
  vertex(96, 433);
  vertex(100, 417);
  vertex(100, 385);
  vertex(96, 377);
  vertex(67, 348);
  vertex(62, 342);
  vertex(50, 329);
  vertex(62, 315);
  vertex(69, 298);
  vertex(74, 284);
  vertex(78, 276);
  vertex(86, 257);
  vertex(95, 231);
  vertex(98, 220);
  vertex(96, 210);
  vertex(87, 193);
  vertex(72, 177);
  vertex(63, 163);
  vertex(62, 143);
  vertex(64, 132);
  vertex(70, 108);
  vertex(82, 82);
  vertex(90, 69);
  vertex(91, 63);
  endShape(CLOSE);
  
  // squiggle line
  fill('black');
  beginShape();
  vertex(90, 58);
  vertex(74, 86);
  vertex(77, 87);
  vertex(77, 90);
  vertex(73, 90);
  vertex(64, 108);
  vertex(55, 132);
  vertex(52, 143);
  vertex(51, 163);
  vertex(55, 177);
  vertex(65, 193);
  vertex(75, 210);
  vertex(79, 220);
  vertex(79, 231);
  vertex(70, 257);
  vertex(64, 276);
  vertex(62, 284);
  vertex(56, 298);
  vertex(51, 319);
  vertex(49, 334);
  vertex(54, 353);
  vertex(72, 377);
  vertex(89, 394);
  vertex(92, 399);
  vertex(89, 408);
  vertex(74, 442);
  vertex(57, 483);
  vertex(51, 497);
  vertex(51, 506);
  vertex(54, 520);
  vertex(61, 531);
  vertex(74, 543);
  vertex(81, 558);
  vertex(80, 569);
  vertex(70, 583);
  vertex(65, 593);
  vertex(57, 602);
  vertex(51, 614);
  vertex(49, 627);
  vertex(52, 638);
  vertex(63, 650);
  vertex(75, 669);
  vertex(79, 682);
  vertex(75, 700);
  vertex(63, 720);
  vertex(58, 738);
  vertex(59, 750);
  vertex(70, 763);
  vertex(84, 772);
  vertex(94, 778);
  vertex(99, 775);
  vertex(99, 759);
  vertex(94, 756);
  vertex(63, 720);
  vertex(58, 738);
  vertex(74, 750);
  vertex(73, 738);
  vertex(88, 720);
  vertex(90, 700);
  vertex(94, 682);
  vertex(90, 669);
  vertex(78, 650);
  vertex(67, 638);
  vertex(63, 627);
  vertex(66, 614);
  vertex(71, 602);
  vertex(80, 593);
  vertex(85, 583);
  vertex(95, 569);
  vertex(96, 558);
  vertex(89, 543);
  vertex(76, 531);
  vertex(69, 520);
  vertex(66, 506);
  vertex(66, 497);
  vertex(72, 483);
  vertex(89, 442);
  vertex(100, 433);
  vertex(105, 417);
  vertex(105, 385);
  vertex(100, 377);
  vertex(71, 348);
  vertex(67, 342);
  vertex(65, 329);
  vertex(69, 315);
  vertex(75, 298);
  vertex(80, 284);
  vertex(83, 276);
  vertex(90, 257);
  vertex(100, 231);
  vertex(103, 220);
  vertex(103, 210);
  vertex(93, 193);
  vertex(77, 177);
  vertex(68, 163);
  vertex(67, 143);
  vertex(69, 132);
  vertex(75, 108);
  vertex(88, 82);
  vertex(95, 69);
  vertex(96, 63);
  endShape(CLOSE);
  
  
  
  
  // vertical line black
  fill('black');
  beginShape();
  vertex(106, 47);
  vertex(112, 49);
  vertex(118, 141);
  vertex(121, 185);
  vertex(118, 238);
  vertex(117, 461);
  vertex(123, 560);
  vertex(123, 641);
  vertex(120, 714);
  vertex(128, 800);
  vertex(114, 802);
  vertex(112, 714);
  vertex(114, 641);
  vertex(112, 560);
  vertex(108, 461);
  vertex(111, 238);
  vertex(112, 185);
  vertex(107, 141);
  vertex(100, 49);
  endShape(CLOSE);
  
  //dark yellow vertex - left
  fill(129,111,63);
  beginShape();
  vertex(118, 36);
  vertex(121, 126);
  vertex(124, 146);
  vertex(125, 180);
  vertex(125, 208);
  vertex(124, 224);
  vertex(121, 239);
  vertex(121, 218);
  vertex(122, 208);
  vertex(122, 180);
  vertex(119, 146);
  vertex(117, 126);
  vertex(112, 47);
  endShape(CLOSE);
  
  //dark yellow vertex - right
  strokeWeight(0);
  fill(129,111,63);
  triangle(304,40,317,57,306,174);
  
  
  //black L shape
  fill('black');
  beginShape();
  vertex(324, 44);
  vertex(321, 139);
  vertex(361, 139);
  vertex(356, 153);
  vertex(311, 151);
  vertex(314, 46);
  endShape(CLOSE);
  
  //light yellow background
  fill(47,202,118);
  beginShape();
  vertex(119, 36);
  vertex(146, 38);
  vertex(171, 40);
  vertex(206, 38);
  vertex(278, 39);
  vertex(288, 41);
  vertex(302, 36);
  vertex(308, 41);
  vertex(308, 149);
  vertex(350, 152);
  vertex(431, 183);
  vertex(528, 178);
  vertex(612, 178);
  vertex(605, 613);
  vertex(278, 655);
  vertex(268, 779);
  vertex(221, 777);
  vertex(184, 782);
  vertex(128, 795);
  endShape(CLOSE);
  
  //black rectangle 1
  fill('black');
  quad(352, 119, 614, 112, 614, 172, 333, 177);
  
  //white rectangle 1
  fill('white');
  quad(410, 255, 645, 251, 614, 375, 487, 371);
  
  //white line 1
  fill('white');
  rect(551,362,24,98,0,0,0,10);
 
  //black rectangle 2
  fill('black');
  quad(410, 275, 615, 271, 614, 375, 487, 371);
  
  //white rectangle 2
  fill('white');
  quad(407, 410, 609, 404, 609, 542, 428, 542);
  
  //black line 1
  fill('black');
  quad(549, 378, 572, 378, 569, 420, 550, 420);
  
  //white line 2
  fill('white');
  rect(550,543,20,110,0,0,0,10);
  

  
 
  //white rectangle 2
  fill('white');
  quad(524, 620, 607, 616, 607, 633, 524, 636);
  
  //black rectangle 3
  fill('black');
  quad(407, 430, 609, 424, 609, 542, 428, 542);
  
   //black rectangle 4
  fill('black');
  rect(500, 636, 210, 80);
  
      //white rectangle 2
  fill('white');
  quad(504, 580, 607, 585, 607, 600, 504, 605);
  
   //black line 2
  fill('black');
  rect(550,569,15,50,0,0,0,10);
  
  
  //ollie background
  fill(129,111,63);
  beginShape();
  vertex(130, 106);
  vertex(165, 126);
  vertex(234, 178);
  vertex(281, 235);
  vertex(294, 252);
  vertex(344, 244);
  vertex(393, 243);
  vertex(425, 255);
  vertex(450, 208);
  vertex(592, 90);
  vertex(606, 100);
  vertex(608, 159);
  vertex(590, 219);
  vertex(564, 262);
  vertex(567, 287);
  vertex(553, 309);
  vertex(504, 343);
  vertex(495, 371);
  vertex(484, 403);
  vertex(494, 429);
  vertex(492, 476);
  vertex(487, 522);
  vertex(514, 561);
  vertex(522, 627);
  vertex(499, 702);
  vertex(496, 779);
  vertex(140, 771);
  vertex(152, 675);
  vertex(157, 621);
  vertex(178, 548);
  vertex(185, 519);
  vertex(208, 424);
  vertex(201, 378);
  vertex(156, 310);
  vertex(148, 290);
  vertex(158, 275);
  vertex(152, 242);
  vertex(128, 182);
  vertex(125, 121);
  endShape(CLOSE);
  

  
  //ollie outline
  fill(177,151,117);
  beginShape();
  vertex(137, 110);
  vertex(169, 126);
  vertex(234, 178);
  vertex(281, 235);
  vertex(294, 252);
  vertex(344, 244);
  vertex(393, 243);
  vertex(425, 255);
  vertex(450, 208);
  vertex(592, 90);
  vertex(606, 100);
  vertex(605, 159);
  vertex(585, 219);
  vertex(558, 262);
  vertex(561, 287);
  vertex(553, 309);
  vertex(504, 343);
  vertex(495, 371);
  vertex(484, 403);
  vertex(494, 429);
  vertex(492, 476);
  vertex(487, 522);
  vertex(509, 561);
  vertex(518, 627);
  vertex(496, 702);
  vertex(492, 779);
  vertex(154, 771);
  vertex(165, 675);
  vertex(165, 621);
  vertex(183, 548);
  vertex(195, 519);
  vertex(215, 424);
  vertex(210, 378);
  vertex(163, 310);
  vertex(158, 290);
  vertex(158, 275);
  vertex(148, 242);
  vertex(128, 182);
  vertex(133, 121);
  endShape(CLOSE);
  
  //left ear 1
  fill('black');
  beginShape();
  vertex(138, 133);
  vertex(155, 190);
  vertex(194, 301);
  vertex(208, 330);
  vertex(208, 348);
  vertex(179, 301);
  vertex(142, 190);
  endShape(CLOSE);
  
   //left ear 2
  fill('black');
  beginShape();
  vertex(145, 125);
  vertex(192, 154);
  vertex(286, 256);
  vertex(276, 259);
  vertex(256, 236);
  vertex(172, 154);
  vertex(153, 142);
  endShape(CLOSE);
  
  //left ear 3
  quad(138, 135, 145, 125, 242, 282, 225, 301);
  
  //right ear 1
   fill('black');
  beginShape();
  vertex(588, 101);
  vertex(599, 101);
  vertex(588, 190);
  vertex(548, 265);
  vertex(543, 299);
  vertex(506, 330);
  vertex(494, 310);
  vertex(548, 240);
  vertex(575, 180);
  vertex(588, 119);
  vertex(473, 224);
  vertex(449, 277);
  vertex(439, 257);
  vertex(462, 216);
  endShape(CLOSE);
  
  //right ear 2
  fill('black');
  beginShape();
  vertex(585, 117);
  vertex(532, 219);
  vertex(482, 302);
  vertex(466, 289);
  vertex(522, 210);
  endShape(CLOSE);
  
   //ollie face left
  fill('black');
  beginShape();
  vertex(289, 256);
  vertex(311, 264);
  vertex(333, 260);
  vertex(355, 264);
  vertex(365, 260);
  vertex(378, 264);
  vertex(397, 277);
  vertex(414, 266);
  vertex(430, 266);
  vertex(441, 288);
  vertex(454, 298);
  vertex(468, 315);
  vertex(468, 332);
  vertex(454, 335);
  vertex(441, 329);
  vertex(430, 315);
  vertex(423, 327);
  vertex(419, 335);
  vertex(403, 332);
  vertex(399, 324);
  vertex(397, 315);
  vertex(390, 335);
  vertex(371, 354);
  vertex(361, 348);
  vertex(355, 359);
  vertex(351, 411);
  vertex(351, 476);
  vertex(351, 563);
  vertex(344, 587);
  vertex(327, 587);
  vertex(311, 592);
  vertex(286, 575);
  vertex(272, 533);
  vertex(272, 504);
  vertex(278, 481);
  vertex(272, 467);
  vertex(245, 430);
  vertex(232, 411);
  vertex(227, 381);
  vertex(227, 344);
  vertex(240, 327);
  vertex(245, 305);
  vertex(251, 298);
  vertex(266, 298);
  vertex(278, 264);
  endShape(CLOSE);
  
  //left eye
  fill(190,166,131);
  beginShape();
  vertex(249, 382);
  vertex(270, 361);
  vertex(291, 350);
  vertex(311, 348);
  vertex(320, 363);
  vertex(320, 382);
  vertex(336, 403);
  vertex(311, 408);
  vertex(293, 415);
  vertex(262, 408);
  endShape(CLOSE);
  
  //left eye ball
  fill('black');
  beginShape();
  vertex(270, 372);
  vertex(292, 363);
  vertex(303, 364);
  vertex(310, 372);
  vertex(314, 384);
  vertex(314, 399);
  vertex(306, 403);
  vertex(302, 397);
  vertex(297, 402);
  vertex(285, 404);
  vertex(277, 399);
  vertex(276, 386);
  vertex(282, 376);
  vertex(291, 374);
  vertex(302, 385);
  vertex(305, 370);
  vertex(307, 386);
  vertex(306, 378);
  vertex(298, 372);
  vertex(286, 372);
  vertex(273, 379);
  vertex(270, 376);
  endShape(CLOSE);
  
   //left eye ball inside
  fill('170');
  beginShape();
  vertex(287, 382);
  vertex(291, 382);
  vertex(296, 385);
  vertex(301, 391);
  vertex(291, 399);
  vertex(283, 394);
  vertex(283, 388);
  endShape(CLOSE);

  //left nostril
  fill(232);
  beginShape();
  vertex(298, 546);
  vertex(317, 554);
  vertex(334, 562);
  vertex(332, 574);
  vertex(324, 574);
  vertex(310, 566);
  endShape(CLOSE);
  
  //right outline
  fill('black');
  stroke(1);
  strokeWeight(10);
  line(458, 316, 489, 343);
  line(489, 343, 482, 378);
  line(482, 378, 475, 401);
  line(475, 401, 479, 427);
  line(479, 427, 470, 466);
  line(470, 466, 421, 495);
  line(421, 495, 407, 520); 
  line(407, 520, 403, 551);
  line(403, 551, 377, 580); 
  line(377, 580, 362, 593);
  line(362, 593, 365, 590);
  line(365, 590, 330, 580);

  //right nostril
  strokeWeight(0);
  fill('black');
  beginShape();
  vertex(395,543);
  vertex(390, 550);
  vertex(373, 569);
  vertex(367, 566);
  vertex(354, 560);
  vertex(360, 558);
  endShape(CLOSE);
  
  //right eye outline
  fill('black');
  beginShape();
  vertex(417,375);
  vertex(438, 373);
  vertex(449, 382);
  vertex(449, 397);
  vertex(431, 421);
  vertex(400, 421);
  vertex(394, 411);
  vertex(402, 386);
  endShape(CLOSE);
  
    //right eyebrow
  fill(232,232,232);
  beginShape();
  vertex(419,382);
  vertex(434, 384);
  vertex(443, 392);
  vertex(434, 407);
  vertex(422, 411);
  vertex(407, 407);
  vertex(411, 393);
  endShape(CLOSE);
  
  //left eye inside
  fill('black');
  beginShape();
  vertex(401,360);
  vertex(424, 355);
  vertex(449, 365);
  vertex(447, 370);
  vertex(430, 365);
  vertex(411, 365);
  vertex(396, 378);
  vertex(393, 394);
  vertex(384, 400);
  vertex(387, 378);
  endShape(CLOSE);

  // mouth
  quad(339, 590, 355, 596, 353, 603, 318, 596);
  
  //forehead
  
  fill(235,200,155);
  beginShape();
  vertex(235, 348);
  vertex(248, 323);
  vertex(255, 353);
  vertex(235, 369);
  endShape(CLOSE);
  
  
  fill(235,200,155);
  beginShape();
  vertex(255, 309);
  vertex(273, 299);
  vertex(278, 281);
  vertex(286, 268);
   vertex(300, 289);
  vertex(303, 323);
  vertex(290, 328);
  vertex(266, 353);
  vertex(255, 323);
  endShape(CLOSE);
  
  fill(235,200,155);
  beginShape();
  vertex(309, 277);
  vertex(331, 268);
  vertex(351, 277);
  vertex(337, 328);
  vertex(317, 323);
  endShape(CLOSE);
  
  fill(235,200,155);
  beginShape();
  vertex(365, 272);
  vertex(390, 284);
  vertex(386, 314);
  vertex(376, 328);
  vertex(358, 323);
  endShape(CLOSE);
  
  fill(235,200,155);
  beginShape();
  vertex(403, 284);
  vertex(422, 272);
  vertex(430, 289);
  vertex(422, 314);
  vertex(406, 309);
  endShape(CLOSE);
  
  fill(235,200,155);
  beginShape();
  vertex(443, 301);
  vertex(455, 309);
  vertex(460, 323);
  vertex(449, 328);
  vertex(443, 318);
  endShape(CLOSE);
  
  //left chest shadow
  fill(111,88,56);
  beginShape();
  vertex(216, 532);
  vertex(222, 604);
  vertex(265, 674);
  vertex(316, 710);
  vertex(246, 687);
  vertex(199, 622);
  vertex(189, 568);
  endShape(CLOSE);
  
  
  //left chest shadow
  fill('black');
  beginShape();
  vertex(208, 532);
  vertex(218, 604);
  vertex(261, 674);
  vertex(310, 710);
  vertex(246, 687);
  vertex(199, 622);
  vertex(189, 568);
  endShape(CLOSE);
  
   fill('black');
  beginShape();
  vertex(464, 528);
  vertex(472, 566);
  vertex(456, 630);
  vertex(405, 677);
  vertex(447, 616);
  endShape(CLOSE);
  
  fill('black');
  quad(349, 739, 375, 729, 416, 760,336, 767);
  
  
    //left eye ball
  fill(111,88,56);
  beginShape();
  vertex(479, 413);
  vertex(486, 427);
  vertex(490, 491);
  vertex(479, 524);
  vertex(502, 581);
  vertex(508, 622);
  vertex(490, 685);
  vertex(486, 768);
  vertex(470, 768);
  vertex(476, 685);
  vertex(492, 622);
  vertex(487, 581);
  vertex(462, 524);
  vertex(480, 491);
  vertex(476, 427);
  endShape(CLOSE);
  
   //left eye ball
  fill('black');
  beginShape();
  vertex(479, 413);
  vertex(486, 427);
  vertex(490, 491);
  vertex(479, 524);
  vertex(502, 581);
  vertex(508, 622);
  vertex(490, 685);
  vertex(486, 768);
  vertex(476, 768);
  vertex(480, 685);
  vertex(498, 622);
  vertex(492, 581);
  vertex(469, 524);
  vertex(480, 491);
  vertex(476, 427);
  endShape(CLOSE);
  
  
  fill(111,88,56);
  beginShape();
  vertex(376, 426);
  vertex(387, 464);
  vertex(395, 505);
  vertex(376, 490);
  vertex(370, 464);
  endShape(CLOSE);
  
  // Ollie name
  fill('blue');
  beginShape();
  vertex(387, 53);
  vertex(407, 74);
  vertex(399, 95);
  vertex(387, 95);
  vertex(377, 74);
  endShape(CLOSE);
  
  fill('blue');
  beginShape();
  vertex(418, 53);
  vertex(427, 88);
  vertex(446, 74);
  vertex(446, 88);
  vertex(421, 95);
  endShape(CLOSE);
  
   fill('blue');
  beginShape();
  vertex(458, 53);
  vertex(477, 88);
  vertex(486, 74);
  vertex(486, 88);
  vertex(461, 95);
  endShape(CLOSE);
  
  rect(506, 70, 10, 50);
  
  fill('blue');
  beginShape();
  vertex(561, 53);
  vertex(554, 71);
  vertex(571, 76);
  vertex(554, 76);
  vertex(571, 95);
  vertex(536, 71);
  endShape(CLOSE);
  
  // initials
  fill('red');
  beginShape();
  vertex(527, 724);
  vertex(535, 764);
  vertex(527, 742);
  vertex(517, 764);
  endShape(CLOSE);
  
  ellipse(542, 760, 4);
  
  fill('red');
  beginShape();
  vertex(552, 724);
  vertex(557, 736);
  vertex(561, 736);
  vertex(566, 724);
  vertex(566, 764);
  vertex(561, 742);
  vertex(557, 742);
  vertex(552, 764);
  endShape(CLOSE);
  
  ellipse(570, 760, 4);
  

}

