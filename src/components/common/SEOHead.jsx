import { useEffect } from 'react';

export default function SEOHead({ title, description }) {
  useEffect(() => {
    const defaultTitle = "R.S. Health Care Service | Professional Home Healthcare & Nursing Services";
    const defaultDesc = "R.S. Health Care Service provides 24/7 professional home healthcare, nursing, patient care, elder care, ICU care, physiotherapy and medical equipment across India. Based in Khanna (Chandigarh).";

    document.title = title ? `${title} | R.S. Health Care Service` : defaultTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || defaultDesc);
    }
  }, [title, description]);

  return null;
}
