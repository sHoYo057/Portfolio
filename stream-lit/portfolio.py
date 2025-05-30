import streamlit as st

def main():
    st.title("Shoyo's Portfolio")
    st.write("Welcome! I’m passionate about AI, data, and building cool stuff.")

    st.header("About Me")
    st.write("AI/ML enthusiast blending code and creativity. I specialize in building models, analyzing data, and creating web apps.")

    st.header("Projects")
    st.subheader("1️⃣ Real-Time Sentiment Analysis")
    st.write("A Python Streamlit app that analyzes Twitter sentiment using natural language processing techniques.")
    st.subheader("2️⃣ Predictive Maintenance")
    st.write("A dashboard powered by machine learning to predict equipment failures before they happen.")

    st.header("Contact")
    st.write("Let’s collaborate or chat!")
    with st.form(key='contact_form'):
        email = st.text_input("Your Email")
        message = st.text_area("Your Message")
        if st.form_submit_button("Send"):
            st.success(f"Thanks for reaching out, {email}! I'll get back to you soon.")

    st.markdown("[LinkedIn](https://www.linkedin.com/in/arun-lama-0b3b3b1b3/)")
    st.markdown("Email: shoyo.dev@example.com")

if __name__ == "__main__":
    main()
