import Card from "./Card";
import SectionTitle from "../Typography/SectionTitle";
import t from "../../../data/translation";
import ContactLine from "../Typography/ContactLine";
import { useState } from "react";

export default function ContactCard() {
  const [copiedText, setCopiedText] = useState<string>("");
  const titles = ["email", "phone", "github"];

  return (
    <Card>
        <div className="px-12 py-10">
            <SectionTitle className="mb-8" underline={false}>{ t["contact-card-name"] }</SectionTitle>
            {/* TODO: simplify */}
            { titles.map((title) => { return (
              <ContactLine key={title} copiedText={copiedText} setCopiedText={setCopiedText} title={title} />
            )}) }
        </div>
    </Card>
  )
}
