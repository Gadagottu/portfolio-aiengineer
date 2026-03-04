import { motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";

interface Blog {
  title: string;
  preview: string;
  readTime: string;
  link: string;
}

const blogs: Blog[] = [
  {
    title: "Real-Time Object Detection with React and TensorFlow.js",
    preview: "A comprehensive guide to building real-time object detection applications using React and TensorFlow.js, covering model integration, camera access, and performance optimization.",
    readTime: "8 min read",
    link: "https://medium.com/@chandrasekhargadagottu/real-time-object-detection-with-react-and-tensorflow-js-ec279c44bc19",
  },
  {
    title: "Text Summarization Tool Using T5-Small Model",
    preview: "Learn how to build an intelligent text summarization tool using the T5-Small transformer model, including implementation details and practical applications.",
    readTime: "6 min read",
    link: "https://medium.com/@chandrasekhargadagottu/text-summarization-tool-using-t5-small-model-fff1f63eb0b2",
  },
];

const BlogsSection = () => {
  return (
    <section id="blogs" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-[0.2em] uppercase mb-3">Writing</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Latest <span className="gradient-text">Blogs</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {blogs.map((blog, i) => (
            <motion.a
              key={blog.title}
              href={blog.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/20 transition-all group block"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <Clock size={14} />
                {blog.readTime}
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {blog.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{blog.preview}</p>
              <span className="inline-flex items-center gap-1.5 text-sm text-primary font-medium">
                Read on Medium <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
