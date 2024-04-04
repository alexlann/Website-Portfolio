import Card from "./Card";
import SectionTitle from "../Typography/SectionTitle";
import t from "../../../data/translation";
import ContactLine from "../Typography/ContactLine";
import { useState } from "react";

export default function ContactCard() {
  const [copiedText, setCopiedText] = useState<string>("");

  return (
    <Card>
        <div className="px-12 py-10">
            <SectionTitle className="mb-8" underline={false}>{ t["contact-card-name"] }</SectionTitle>
            {/* TODO: hoe kan dit simpeler? */}
            <ContactLine copiedText={copiedText} setCopiedText={setCopiedText} boldText={t["contact-card-email"]} text={t["contact-card-email-link"]} />
            <ContactLine copiedText={copiedText} setCopiedText={setCopiedText} boldText={t["contact-card-phone"]} text={t["contact-card-phone-link"]} />
            <ContactLine copiedText={copiedText} setCopiedText={setCopiedText} boldText={t["contact-card-github"]} text={t["contact-card-github-link"]} />
        </div>
    </Card>
  )
}
