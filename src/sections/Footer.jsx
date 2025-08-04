
const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300
      flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
            <p>Namaste Visitor 🙏</p>
        </div>

        <div className="flex gap-3 ">
            <div className="social-icon">
                <a href="https://github.com/ranajiya"><img src="/assets/github.svg" alt="github" /></a>
            </div>
            <div className="social-icon">
                <a href="https://linkedin.com/in/jiya-rana"><img src="/assets/linkedin.svg" alt="linkedin" /></a>
            </div>
            <div className="social-icon">
                <a href="https://leetcode.com/u/gokuo/"><img src="/assets/leetcode.svg" alt="leetcode" /></a>
            </div>
        </div>

        <p className="text-white-500">
            &copy;2024 Jiya Rana. All rights reserved.
        </p>
    </section>
  )
}

export default Footer