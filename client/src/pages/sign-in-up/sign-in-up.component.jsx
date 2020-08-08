import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-in-up.styles.scss";

const SignInUp = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -300, opacity: 0 }}
        className="sign-in-up__page"
      >
        <SignIn />
        <SignUp />
      </motion.div>
    </AnimatePresence>
  );
};

export default SignInUp;
