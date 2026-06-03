/* ===================================
   FITNESS FREAK - JAVASCRIPT
=================================== */

/* ===================================
   FITNESS PLANS DATABASE
=================================== */

const plans = {

    "Weight Loss": {
        title: "Weight Loss Plan",
        focus: "Fat Reduction",

        actions: [
            "Cardio workouts 5 times per week",
            "Maintain a calorie deficit diet",
            "Daily walking (8,000 - 10,000 steps)"
        ]
    },

    "Weight Gain": {
        title: "Weight Gain Plan",
        focus: "Healthy Weight Gain",

        actions: [
            "Maintain a calorie surplus",
            "Strength training 4-5 times per week",
            "Consume protein-rich foods"
        ]
    },

    "Muscle Building": {
        title: "Muscle Building Plan",
        focus: "Muscle Hypertrophy",

        actions: [
            "Progressive overload training",
            "High protein intake",
            "Prioritize sleep and recovery"
        ]
    },

    "Fat Loss": {
        title: "Fat Loss Plan",
        focus: "Body Recomposition",

        actions: [
            "HIIT workouts 3-4 times weekly",
            "Balanced nutrition plan",
            "Increase daily activity level"
        ]
    },

    "Strength Training": {
        title: "Strength Training Plan",
        focus: "Strength Development",

        actions: [
            "Focus on compound lifts",
            "Track strength progression",
            "Schedule recovery days"
        ]
    },

    "General Fitness": {
        title: "General Fitness Plan",
        focus: "Balanced Lifestyle",

        actions: [
            "2 Full Body Strength sessions",
            "2 Cardio sessions weekly",
            "Healthy eating and mobility work"
        ]
    }

};

/* ===================================
   GENERATE AI PLAN
=================================== */

function generatePlan() {

    const weight =
        document.getElementById("weight").value;

    const height =
        document.getElementById("height").value;

    const goal =
        document.getElementById("goal").value;

    const target =
        document.getElementById("target").value;

    const timeline =
        document.getElementById("timeline").value;

    if (
        weight === "" ||
        height === "" ||
        target === ""
    ) {

        alert("Please fill all fields.");

        return;
    }

    const selectedPlan =
        plans[goal];

    const resultHTML = `

    <div class="ai-result-card">

        <span class="badge">
            AI Generated Routine
        </span>

        <h2 style="margin-top:15px;">
            ${selectedPlan.title}
        </h2>

        <div class="target-box">
            Target:
            ${target}
            ${timeline}
        </div>

        <h4>
            PRIMARY FOCUS
        </h4>

        <p class="focus">
            ${selectedPlan.focus}
        </p>

        <h4 style="margin-bottom:15px;">
            ACTION PLAN
        </h4>

        ${selectedPlan.actions.map((item,index)=>`

            <div class="action-item">

                <div class="step">
                    ${index + 1}
                </div>

                <div>
                    ${item}
                </div>

            </div>

        `).join("")}

        <button
            class="save-btn"
            onclick="savePlan()">

            Save Plan To Dashboard

        </button>

    </div>

    `;

    document.getElementById("result").innerHTML =
        resultHTML;

}

/* ===================================
   SAVE PLAN TO LOCAL STORAGE
=================================== */

function savePlan() {

    const goal =
        document.getElementById("goal").value;

    const target =
        document.getElementById("target").value;

    const timeline =
        document.getElementById("timeline").value;

    const savedPlan = {

        goal,
        target,
        timeline,
        date:
        new Date().toLocaleDateString()

    };

    localStorage.setItem(
        "fitnessPlan",
        JSON.stringify(savedPlan)
    );

    alert(
        "Plan saved successfully!"
    );

}

/* ===================================
   LOAD SAVED PLAN
=================================== */

window.addEventListener(
    "load",
    () => {

        const savedPlan =
            localStorage.getItem(
                "fitnessPlan"
            );

        if(savedPlan){

            console.log(
                "Saved Plan Found:",
                JSON.parse(savedPlan)
            );

        }

    }
);

/* ===================================
   LOGIN VALIDATION
=================================== */

function loginUser() {

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    const message =
        document.getElementById(
            "loginMessage"
        );

    if(
        email.trim() === "" ||
        password.trim() === ""
    ){

        message.innerHTML =
            "Please fill all fields.";

        message.style.color =
            "#ff6b6b";

        return;
    }

    if(
        !email.includes("@")
    ){

        message.innerHTML =
            "Enter a valid email.";

        message.style.color =
            "#ff6b6b";

        return;
    }

    if(
        password.length < 6
    ){

        message.innerHTML =
            "Password must be at least 6 characters.";

        message.style.color =
            "#ff6b6b";

        return;
    }

    message.innerHTML =
        "Login Successful ✓";

    message.style.color =
        "#4ade80";

}

/* ===================================
   FADE-IN ANIMATION
=================================== */

const observer =
new IntersectionObserver(

(entries)=>{

    entries.forEach(

        entry=>{

            if(
                entry.isIntersecting
            ){

                entry.target.classList.add(
                    "show"
                );

            }

        }

    );

},

{
    threshold:0.2
}

);

document
.querySelectorAll(
    ".section"
)
.forEach(

section=>{

    section.classList.add(
        "fade-in"
    );

    observer.observe(
        section
    );

}

);

/* ===================================
   NAVBAR SHADOW ON SCROLL
=================================== */

window.addEventListener(
    "scroll",
    () => {

        const navbar =
            document.querySelector(
                ".navbar"
            );

        if(
            window.scrollY > 50
        ){

            navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.25)";

        }
        else{

            navbar.style.boxShadow =
            "none";

        }

    }
);

/* ===================================
   SMOOTH SCROLL
=================================== */

document
.querySelectorAll(
    'a[href^="#"]'
)
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(e){

            e.preventDefault();

            const target =
            document.querySelector(
                this.getAttribute("href")
            );

            target.scrollIntoView({
                behavior:"smooth"
            });

        }
    );

});

/* ===================================
   SIGNUP BUTTON
=================================== */

const signupBtn =
document.querySelector(
    ".signup-btn"
);

if(signupBtn){

    signupBtn.addEventListener(
        "click",
        ()=>{

            alert(
                "Sign Up feature coming soon!"
            );

        }
    );

}