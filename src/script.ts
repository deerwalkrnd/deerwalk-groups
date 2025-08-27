document.addEventListener('DOMContentLoaded', () => {

    const button = document.getElementsByClassName("testimonial");
    const model = document.getElementsByClassName("model-wrapper")[0];
    const close_model_icon = document.getElementsByClassName(
        "cross-icon-container",
    )[0];

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function () {
            // this.classList.toggle("active");
            model.classList.toggle("invisible");
        });

        close_model_icon.addEventListener("click", function () {
            model.classList.add("invisible");
        });
    }

    // ========================Dynamic Logic for testimonial model===========================

    const testimonialDataSet = [
        {
            name: "Rudra Pandey",
            designation: "Chairperson Emeritus / Founder",
            description:
                "Rudra is a pioneer in the software outsourcing industry in Nepal with significant IT experience in the financial service industry. He received his Bachelor's degree in Electrical Engineering from Pakistan and PhD in Economics from Northeastern University, USA. His vision is to create a comprehensive learning in Nepal focusing on technology and its application for the benefit of the country.",
        },
        {
            name: "Hitesh Karki",
            designation: "Chairperson",
            description:
                "Hitesh's core responsibility is to look after the curriculum, ensure timely execution of classes and help connect the students with the happenings of the industry. He completed his Bachelor's degree in Computer Science, from Ferguson College, Pune University, his MBA (Executive) from Kathmandu University (KU) and is currently pursuing his PhD from Kathmandu University.",
        },
        // {
        //     name: "Samjhana Pokhrel",
        //     designation: "Vice President of Academic Affairs",
        //     description:
        //         "Samjhana brings over eight years of experience in higher education, having contributed to key areas such as Admissions, Administration, Examination, and Placement. As Vice President of Academic Affairs, she is dedicated to advancing academic quality, driving innovation, and strengthening institutional growth.She holds a Bachelor's in Information Management and a Master's in English Literature from Pokhara University, along with a Master's in Data Science from the University of Westminster, London—reflecting her interdisciplinary expertise across humanities, management, and technology.With a strong blend of academic and administrative insight, Samjhana is committed to fostering a forward-thinking, student-focused academic environment.",
        // },
   
        // {
        //     name: "Ujjwal Poudel",
        //     designation: "Vice Principal / DSS Administrative Affairs",
        //     description:
        //         "Ujjwal holds a Master's Degree in Physics from Tribhuvan University. He has more than 12 years of teaching experience. He is an alumnus of the European Council for Nuclear Research (CERN) Teachers Programme 2022 and an official CERN ambassador for promoting Science and Technology in Nepal. Since joining Deerwalk in 2016, he has worked in various roles and led educational projects preparing online learning content for Nepal. Currently, he works as the Vice Principal of Deerwalk Sifal School.",
        // },
        
        // {
        //     name: "Madhu Sudhan Bhusal",
        //     designation: "Vice Principal / DSS Academic Affairs",
        //     description:
        //         "Mr. Bhusal holds Master of Science in Physics from Tribhuvan University. He is the Head of High School & He teaches Physics.",
        // },
        // {
        //     name: "Nirmal Kumar Paudel",
        //     designation: "DDS Principal",
        //     description:
        //         "Nirmal Kumar Paudel is currently serving as the Principal of Deerwalk Dhading School. With a Master's Degree in Education (M. Ed.), he brings 17 years of extensive teaching experience. Throughout his career, he has held various roles at Deerwalk Sifal School, including Head of High School, Program Officer, and Vice Principal of Administrative Affairs. He has completed eight years of dedicated service at Deerwalk and is now in his ninth year.",
        // },
        // NEW TEAM MEMBERS DATA
        
       
        {
            name: "Nizu Dahal",
            designation: "Director of Administration - DWIT",
            description:
                "Nizu Dahal brings over 14 years of professional experience in people and culture management, spanning roles in hospitals, software companies, and academia. With a seamless transition into higher education, Nizu is currently dedicated to nurturing future leaders and contributing to the institutional growth of Deerwalk Institute of Technology. Her academic background includes a Master's degree in International Relations and Diplomacy from Tribhuvan University, which equips her to foster positive student relations, prepare students for future employment, and enhance organizational dynamics.",
        },
        {   
            name: "Pooja Neupane",
            designation: "Director of Finance",
            description:
                "Pooja Neupane has recently assumed the role of Associate Director of Finance at Deerwalk Group Limited. Holding a Chartered Accountant designation from the Institute of Chartered Accountants of India, her professional journey includes notable experience at TR Upadhya and Co., where she honed her skills in accounting and finance.",
        },
        //  {
        //     name: "Hariram Khadka",
        //     designation: "Administration and Legal Officer",
        //     description:
        //         "Hariram Khadka is the Admin Officer at Deerwalk Group, responsible for overseeing administrative operations and ensuring smooth day-to-day functioning of the organization. His attention to detail and organizational skills make him an invaluable asset to the administrative team, supporting various departments in their operational needs.",
        // },
        // {
        //     name: "Alisha Thapa Magar",
        //     designation: "Human Resource Officer",
        //     description:
        //         "Alisha Thapa Magar serves as the Associate Human Resource Officer at Deerwalk Group. With her expertise in human resources management, she plays a crucial role in talent acquisition, employee development, and organizational culture enhancement. Her dedication to fostering a positive work environment contributes significantly to the company's growth and employee satisfaction.",
        // },
    ];

    const testimonialNode = document.getElementsByClassName("testimonial");

    // put add event listener on each testimonial
    for (let i = 0; i < testimonialNode.length; i++) {
        testimonialNode[i].addEventListener("click", function () {
            const testimonial_image =
                document.getElementsByClassName("testimonial-image")[i];
            const testimonial_image_url = testimonial_image.getAttribute("src") as string;
            // console.log(testimonial_image_url);
            const model_img_node = document.getElementById("model_image");
            if (model_img_node == null) {
                console.log("model_img_node is null");
                return;
            }
            model_img_node.setAttribute("src", testimonial_image_url);

            const model_name = document.getElementById("model-name");
            const model_designation = document.getElementById("model-designation");
            const model_description = document.getElementById("model-description");

            if (model_name == null || model_designation == null || model_description == null) {
                console.log("model_name, model_designation, model_description is null");
                return;
            }
            model_name.innerHTML = testimonialDataSet[i].name;
            model_designation.innerHTML = testimonialDataSet[i].designation;
            model_description.innerHTML = testimonialDataSet[i].description;
        });
    }
})