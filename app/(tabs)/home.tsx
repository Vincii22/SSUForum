import { Image } from 'expo-image'; // Import expo-image here
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../../assets/styles/homeStyle';
export default function HomePage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        {/* Left side */}
        <View style={styles.logoContainer}>
            <Image source={require('../../assets/images/logo.png')} style={styles.storyImage} />
             <Text style={styles.logoName}>SSU Forum</Text>
        </View>

        {/* Right side */}
        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require('../../assets/images/notification.png')} style={styles.iconStyle} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require('../../assets/images/message.png')} style={styles.iconStyle} />
          </TouchableOpacity>
        </View>
      </View>

 {/* Stories Section */}
<View style={styles.storiesContainer}>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {/* Example stories */}
    <View style={styles.storyItem}>
      <View style={styles.storyCircle}>
        <Text style={{ fontSize: 24 }}>＋</Text>
      </View>
      <Text style={styles.storyLabel}>Your Story</Text>
    </View>

    {[...Array(7)].map((_, index) => (
      <View key={index} style={styles.storyItem}>
        <View style={styles.storyCircle}>
          <Image source={require('../../assets/images/picture1.jpg')} style={styles.storyImage} />
        </View>
        <Text style={styles.storyLabel}>User {index + 1}</Text>
      </View>
    ))}
  </ScrollView>
</View>

      {/* Posts Section */}
      <View style={styles.postsContainer}>
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <Image source={require('../../assets/images/picture1.jpg')} style={styles.profilePic} />
            <Text style={styles.username}>Zylor Gojar</Text>

            <TouchableOpacity>
              <Text style={styles.menu}>⋮</Text>
            </TouchableOpacity>

          </View>

          {/* Title before Description */}
          <Text style={styles.postTitle}>SorSU Games 2025 Special Coverage | SorSU Games 2025 Strikes with a Vibrant Celebration of Unity and Spirit</Text>

          {/* Description with Read More / Less toggle */}
          <Text style={styles.postDescription}>
            {isExpanded ? 'Sorsogon State University Castilla Campus roared to life as the SORSU Games 2025 launched its opening day under the theme “Building Bonds, Breaking Barriers, Becoming Champions Together.”The week-long sports festival began with a spirited parade at dawn, followed by an official ceremony steeped in school pride. The ROTC’s Entrance of Colors, a rousing anthem by Ma’am Charlene N. Lagunilla, and the SorSU Hymn performed by the university band set a powerful tone.Campus Director Prof. Andrew F. Detera welcomed participants with a call for unity and joy in friendly competition. Highlights included the Unit Team Yells, the Oath of Sportsmanship led by Sports Club President Vladimir De Asis, and an energizing SorSU Bayle dance performance involving students, faculty, and administrators.'
            : 'Sorsogon State University Castilla Campus roared to life as the SORSU Games 2025 launched its opening day under the theme ...'.substring(0, 100) + '...'}
          </Text>

          <TouchableOpacity onPress={toggleDescription}>
            <Text style={styles.readMore}>{isExpanded ? 'Read Less' : 'Read More'}</Text>
          </TouchableOpacity>

          <Image source={require('../../assets/images/post1.jpg')} style={styles.postImage} />
          <View style={styles.reactionsContainer}>
            <View style={styles.reactionItem}>
              <TouchableOpacity>
                            <Image source={require('../../assets/images/heart.png')} style={styles.iconStyle} />
              </TouchableOpacity>
              <Text>123</Text>
            </View>
            <View style={styles.reactionItem}>
              <TouchableOpacity>
                          <Image source={require('../../assets/images/comment.png')} style={styles.iconStyle} />
              </TouchableOpacity>
              <Text>45</Text>
            </View>
            <View style={styles.reactionItem}>
              <TouchableOpacity>
                           <Image source={require('../../assets/images/share.png')} style={styles.iconStyle} />
              </TouchableOpacity>
              <Text>67</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.bookmarkButton}>
            <Image source={require('../../assets/images/bookmark.png')} style={styles.iconStyle} />
          </TouchableOpacity>
        </View>

        {/* Additional posts can go here */}
         <View style={styles.post}>
          <View style={styles.postHeader}>
            <Image source={require('../../assets/images/picture1.jpg')} style={styles.profilePic} />
            <Text style={styles.username}>Zylor Gojar</Text>
            <TouchableOpacity>
              <Text style={styles.menu}>⋮</Text>
            </TouchableOpacity>
          </View>

          {/* Title before Description */}
          <Text style={styles.postTitle}>Bulan, Castilla, Magallanes Campuses launch SorSU Games 2025 opening ceremonies with vibrant, festive performances; SorSU President De Jesus extends support</Text>

          {/* Description with Read More / Less toggle */}
          <Text style={styles.postDescription}>
            {isExpanded ? 'SUC President III, Dr. Geraldine F. De Jesus, actively joined the opening ceremonies of the SorSU Games 2025 at the Bulan, Castilla, and Magallanes Campuses on May 5, 6, and 7, 2025, respectively, demonstrating the administration’s commitment to supporting University events and fostering community spirit.The three campuses kicked off their celebration with a parade of unity, setting the stage for the week-long sports event. The programs also featured flag hoisting, the lighting of friendship torch, and the oath of amateurism.'

            : 'SorSU Games 2025: Opening ProgramSUC President III, Dr. Geraldine F. De Jesus, actively joined the opening ceremonies of the SorSU ...'.substring(0, 100) + '...'}
          </Text>

          <TouchableOpacity onPress={toggleDescription}>
            <Text style={styles.readMore}>{isExpanded ? 'Read Less' : 'Read More'}</Text>
          </TouchableOpacity>

          <Image source={require('../../assets/images/post2.jpg')} style={styles.postImage} />
          <View style={styles.reactionsContainer}>
            <View style={styles.reactionItem}>
              <TouchableOpacity>
                            <Image source={require('../../assets/images/heart.png')} style={styles.iconStyle} />
              </TouchableOpacity>
              <Text>123</Text>
            </View>
            <View style={styles.reactionItem}>
              <TouchableOpacity>
                          <Image source={require('../../assets/images/comment.png')} style={styles.iconStyle} />
              </TouchableOpacity>
              <Text>45</Text>
            </View>
            <View style={styles.reactionItem}>
              <TouchableOpacity>
                           <Image source={require('../../assets/images/share.png')} style={styles.iconStyle} />
              </TouchableOpacity>
              <Text>67</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.bookmarkButton}>
            <Image source={require('../../assets/images/bookmark.png')} style={styles.iconStyle} />
          </TouchableOpacity>
        </View>
         {/* Additional posts can go here */}
         <View style={styles.post}>
          <View style={styles.postHeader}>
            <Image source={require('../../assets/images/picture1.jpg')} style={styles.profilePic} />
            <Text style={styles.username}>Zylor Gojar</Text>
            <TouchableOpacity>
              <Text style={styles.menu}>⋮</Text>
            </TouchableOpacity>
          </View>

          {/* Title before Description */}
          <Text style={styles.postTitle}>SorSU-COEA faculty Engr. Labalan completes two-week 2025 NTU Taiwan Chip-based Industrial Innovation Program</Text>

          {/* Description with Read More / Less toggle */}
          <Text style={styles.postDescription}>
            {isExpanded ? 'Sorsogon State University (SorSU) faculty member Engr. Robert Christian D. Labalan from the College of Engineering and Architecture (COEA) successfully completed the two-week NTU Taiwan Chip-based Industrial Innovation Program at the National Taiwan University from March 2-14, 2025.Designed to enhance understanding of cutting-edge chip-based knowledge, foster intercultural competence, and expand global networks, Engr. Labalan engaged in an immersive learning experience during the short course training. This experience included valuable lectures on topics such as the History and Future of Chip Design and Manufacturing (Chip Wars), Materials/Physics/Chemistry – Sciences Behind Chips, Analog Integrated Design Circuits, Introduction to Very Large-Scale Integration (VLSI) Signal Processing, Overview of Digital IC Design Flow, and Electric Design Flow, as well as chip fabrication tours and industry visits to NTU NEMS Chip Fabrication, TSMC Museum of Innovation, and MediaTek. (SorSU PIO)'
            : 'Sorsogon State University (SorSU) faculty member Engr. Robert Christian D. Labalan from the College of Engineering and Architecture (COEA) successfully ...'.substring(0, 100) + '...'}
          </Text>

          <TouchableOpacity onPress={toggleDescription}>
            <Text style={styles.readMore}>{isExpanded ? 'Read Less' : 'Read More'}</Text>
          </TouchableOpacity>

          <Image source={require('../../assets/images/post3.jpg')} style={styles.postImage} />
          <View style={styles.reactionsContainer}>
            <View style={styles.reactionItem}>
              <TouchableOpacity>
                            <Image source={require('../../assets/images/heart.png')} style={styles.iconStyle} />
              </TouchableOpacity>
              <Text>123</Text>
            </View>
            <View style={styles.reactionItem}>
              <TouchableOpacity>
                          <Image source={require('../../assets/images/comment.png')} style={styles.iconStyle} />
              </TouchableOpacity>
              <Text>45</Text>
            </View>
            <View style={styles.reactionItem}>
              <TouchableOpacity>
                           <Image source={require('../../assets/images/share.png')} style={styles.iconStyle} />
              </TouchableOpacity>
              <Text>67</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.bookmarkButton}>
            <Image source={require('../../assets/images/bookmark.png')} style={styles.iconStyle} />
          </TouchableOpacity>
        </View>
         {/* Additional posts can go here */}
         <View style={styles.post}>
          <View style={styles.postHeader}>
            <Image source={require('../../assets/images/picture1.jpg')} style={styles.profilePic} />
            <Text style={styles.username}>Zylor Gojar</Text>
            <TouchableOpacity>
              <Text style={styles.menu}>⋮</Text>
            </TouchableOpacity>
          </View>

          {/* Title before Description */}
          <Text style={styles.postTitle}>SorSU produces 11 newly licensed civil engineers</Text>

          {/* Description with Read More / Less toggle */}
          <Text style={styles.postDescription}>
            {isExpanded ? 'The Sorsogon State University (SorSU) is proud to announce that 11 BS Civil Engineering graduates of the University are now Licensed Civil Engineers, having successfully passed the April 2025 Civil Engineers Licensure Examination (CELE) held on April 28 & 29, 2025.According to the Professional Regulation Commission (PRC), 4,940 out of 16,913 examinees passed the licensure examination. SorSU obtained a notable performance rating of 33.33% for first-time takers.'
            : 'The Sorsogon State University (SorSU) is proud to announce that 11 BS Civil Engineering graduates of the University are now ...'.substring(0, 100) + '...'}
          </Text>

          <TouchableOpacity onPress={toggleDescription}>
            <Text style={styles.readMore}>{isExpanded ? 'Read Less' : 'Read More'}</Text>
          </TouchableOpacity>

          <Image source={require('../../assets/images/post4.jpg')} style={styles.postImage} />
          <View style={styles.reactionsContainer}>
            <View style={styles.reactionItem}>
              <TouchableOpacity>
                            <Image source={require('../../assets/images/heart.png')} style={styles.iconStyle} />
              </TouchableOpacity>
              <Text>123</Text>
            </View>
            <View style={styles.reactionItem}>
              <TouchableOpacity>
                          <Image source={require('../../assets/images/comment.png')} style={styles.iconStyle} />
              </TouchableOpacity>
              <Text>45</Text>
            </View>
            <View style={styles.reactionItem}>
              <TouchableOpacity>
                           <Image source={require('../../assets/images/share.png')} style={styles.iconStyle} />
              </TouchableOpacity>
              <Text>67</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.bookmarkButton}>
            <Image source={require('../../assets/images/bookmark.png')} style={styles.iconStyle} />
          </TouchableOpacity>
        </View>
         {/* Additional posts can go here */}
         <View style={styles.post}>
          <View style={styles.postHeader}>
            <Image source={require('../../assets/images/picture1.jpg')} style={styles.profilePic} />
            <Text style={styles.username}>Zylor Gojar</Text>
            <TouchableOpacity>
              <Text style={styles.menu}>⋮</Text>
            </TouchableOpacity>
          </View>

          {/* Title before Description */}
          <Text style={styles.postTitle}>SorSU-Sorsogon City Campus officially kicks off SorSU Games 2025 with opening parade, first-ever SorSU Bayle demonstration</Text>

          {/* Description with Read More / Less toggle */}
          <Text style={styles.postDescription}>
            {isExpanded ? 'Bearing the theme “SorSU Games 2025: Building Bonds, Breaking Barriers, Becoming Champions Together,” Sorsogon State University (SorSU) simultaneously kicked off the SorSU Games 2025 across four campuses with a grand parade and an opening program highlighting the dynamic SorSU Bayle at Sorsogon City Campus on May 5, 2025, held at the Sorsogon Sports Arena.SorSU key officials, faculty members, non-teaching personnel, student organizations, and SorSUeno students/student-athletes from various colleges joined the opening parade, which began at the SorSU Covered Court and proceeded to the Sorsogon Sports Arena.Mr. Richard Kevin A. Espedido (OIC-Head, Sports, Culture and Arts Unit) delivered the opening remarks, followed by a message from Dr. Telesforo D. Escoto (Campus Director, Sorsogon City Campus).Meanwhile, SUC President III, Dr. Geraldine F. De Jesus, emphasized in her message the significance of a balance between academic programs and tasks/activities that promote physical fitness, sportsmanship, and holistic development.'
             : 'Bearing the theme “SorSU Games 2025: Building Bonds, Breaking Barriers, Becoming Champions Together,” Sorsogon State University (SorSU) simultaneously kicked off ...'.substring(0, 100) + '...'}
          </Text>

          <TouchableOpacity onPress={toggleDescription}>
            <Text style={styles.readMore}>{isExpanded ? 'Read Less' : 'Read More'}</Text>
          </TouchableOpacity>

          <Image source={require('../../assets/images/post5.jpg')} style={styles.postImage} />
          <View style={styles.reactionsContainer}>
            <View style={styles.reactionItem}>
              <TouchableOpacity>
                            <Image source={require('../../assets/images/heart.png')} style={styles.iconStyle} />
              </TouchableOpacity>
              <Text>123</Text>
            </View>
            <View style={styles.reactionItem}>
              <TouchableOpacity>
                          <Image source={require('../../assets/images/comment.png')} style={styles.iconStyle} />
              </TouchableOpacity>
              <Text>45</Text>
            </View>
            <View style={styles.reactionItem}>
              <TouchableOpacity>
                           <Image source={require('../../assets/images/share.png')} style={styles.iconStyle} />
              </TouchableOpacity>
              <Text>67</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.bookmarkButton}>
            <Image source={require('../../assets/images/bookmark.png')} style={styles.iconStyle} />
          </TouchableOpacity>
        </View>
         {/* Additional posts can go here */}
         <View style={styles.post}>
          <View style={styles.postHeader}>
            <Image source={require('../../assets/images/picture1.jpg')} style={styles.profilePic} />
            <Text style={styles.username}>Zylor Gojar</Text>
            <TouchableOpacity>
              <Text style={styles.menu}>⋮</Text>
            </TouchableOpacity>
          </View>

          {/* Title before Description */}
          <Text style={styles.postTitle}>Exchange Students visit President De Jesus after return from Kien Giang University, Vietnam</Text>

          {/* Description with Read More / Less toggle */}
          <Text style={styles.postDescription}>
            {isExpanded ? 'Sorsogon State University-Bulan Campus students who recently completed their academic and cultural exchange program at Kien Giang University in Vietnam paid a courtesy visit to SUC President III, Dr. Geraldine F. De Jesus, on May 6, 2025, at the Office of the University President.During the meeting, the students recounted their experiences and discussed the significance of the exchange program. They emphasized how it broadened their global perspective and contributed to their personal development. Additionally, President De Jesus warmly welcomed the students back and encouraged them to share their experiences with their fellow students to inspire others to join future exchange programs.Present during the courtesy visit were Mr. Erwin Formento, Mr. Mel-jhun Evangelista, Ms. Rhyz April Gueta, Ms. Lougen Lozada, Ms. Mariel Angela Rodrigo, Mr. Kharl Andrei Hizon, Mr. Josh Bayoca, Mr. Gabriel Joash de Gala, along with Mr. Jopet Vincent B. Medalla (Faculty-in-charge/KGU-SorSU Exchange Faculty).The successful exchange program with Kien Giang University reaffirmed the university’s commitment to global engagement and student development through international partnerships. (SorSU PIO)'
            : 'Sorsogon State University-Bulan Campus students who recently completed their academic and cultural exchange program at Kien Giang University in Vietnam ...'.substring(0, 100) + '...'}
          </Text>

          <TouchableOpacity onPress={toggleDescription}>
            <Text style={styles.readMore}>{isExpanded ? 'Read Less' : 'Read More'}</Text>
          </TouchableOpacity>

          <Image source={require('../../assets/images/post6.jpg')} style={styles.postImage} />
          <View style={styles.reactionsContainer}>
            <View style={styles.reactionItem}>
              <TouchableOpacity>
                            <Image source={require('../../assets/images/heart.png')} style={styles.iconStyle} />
              </TouchableOpacity>
              <Text>123</Text>
            </View>
            <View style={styles.reactionItem}>
              <TouchableOpacity>
                          <Image source={require('../../assets/images/comment.png')} style={styles.iconStyle} />
              </TouchableOpacity>
              <Text>45</Text>
            </View>
            <View style={styles.reactionItem}>
              <TouchableOpacity>
                           <Image source={require('../../assets/images/share.png')} style={styles.iconStyle} />
              </TouchableOpacity>
              <Text>67</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.bookmarkButton}>
            <Image source={require('../../assets/images/bookmark.png')} style={styles.iconStyle} />
          </TouchableOpacity>
        </View>
         {/* Additional posts can go here */}
         <View style={styles.post}>
          <View style={styles.postHeader}>
            <Image source={require('../../assets/images/picture1.jpg')} style={styles.profilePic} />
            <Text style={styles.username}>Zylor Gojar</Text>
            <TouchableOpacity>
              <Text style={styles.menu}>⋮</Text>
            </TouchableOpacity>
          </View>

          {/* Title before Description */}
          <Text style={styles.postTitle}>SorSU Bags Awards at Entrelympics 2025 in UP Los Banos</Text>

          {/* Description with Read More / Less toggle */}
          <Text style={styles.postDescription}>
            {isExpanded ? 'The Sorsogon State University (SorSU) BS Entrepreneurship students proudly brought home multiple awards during the recently concluded Entrelympics 2025 held at the University of the Philippines Los Banos on May 3 to 4, 2025, showcasing their excellence in various entrepreneurship-related competitions.Outshining tough competition from 16 other participating schools across the country, SorSU secured the following major wins:1st Place – Video Advertisement Competition2nd Place – Quiz Bee3rd Place – Case Study CompetitionIn the Video Advertisement Competition, the SorSU team bested 11 other contenders with their creative and compelling entry. The winning team was composed of Khristian Louise Cadag, Lynch Malto, Junriz Arevalo, and Joshua Kent Denzo.For the Case Study Competition, the team of Pauline Escoto, Relly Geronimo, Jaymhel Dometita, Jasyreene Habulan, and Rafael Blazo secured third place after presenting a well-analyzed and innovative business case.In the Quiz Bee, SorSU’s Aubrey Estur and Michaela Burton showcased their knowledge and teamwork, earning them second place among sharp-minded competitors.Meanwhile, Christine Grace Pantua represented SorSU in the Extemporaneous Speaking Competition, bringing pride through her articulate performance. The teams were coached and mentored by Ms. Pauline Pearl Cruz and Ms. Shenise Rhae A. Gilbas, whose guidance played a vital role in the students’ success.The achievements of SorSU at Entrelympics 2025 affirm the university’s commitment to excellence in entrepreneurship education and its dedication to molding globally competitive student leaders. (CBM)'
            : 'The Sorsogon State University (SorSU) BS Entrepreneurship students proudly brought home multiple awards during the recently concluded Entrelympics 2025 held ...'.substring(0, 100) + '...'}
          </Text>

          <TouchableOpacity onPress={toggleDescription}>
            <Text style={styles.readMore}>{isExpanded ? 'Read Less' : 'Read More'}</Text>
          </TouchableOpacity>

          <Image source={require('../../assets/images/post7.jpg')} style={styles.postImage} />
          <View style={styles.reactionsContainer}>
            <View style={styles.reactionItem}>
              <TouchableOpacity>
                            <Image source={require('../../assets/images/heart.png')} style={styles.iconStyle} />
              </TouchableOpacity>
              <Text>123</Text>
            </View>
            <View style={styles.reactionItem}>
              <TouchableOpacity>
                          <Image source={require('../../assets/images/comment.png')} style={styles.iconStyle} />
              </TouchableOpacity>
              <Text>45</Text>
            </View>
            <View style={styles.reactionItem}>
              <TouchableOpacity>
                           <Image source={require('../../assets/images/share.png')} style={styles.iconStyle} />
              </TouchableOpacity>
              <Text>67</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.bookmarkButton}>
            <Image source={require('../../assets/images/bookmark.png')} style={styles.iconStyle} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
