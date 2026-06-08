"use client";
import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            // Optional: stop observing once revealed
            // observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Initial check for elements that are already in the DOM
    const observeElements = () => {
      const elements = document.querySelectorAll(".reveal-left, .reveal-up");
      elements.forEach((el) => observer.observe(el));
    };

    observeElements();

    // Since Next.js might navigate or load components dynamically, 
    // a MutationObserver can help catch new elements.
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
