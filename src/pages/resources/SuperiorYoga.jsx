import { superiorYogaBanner } from "../../assets/images";
import { PanoramicBanner } from "../../components";

const SuperiorYoga = () => {
  const resourceData = {
    title: "Superior Yoga",
    banner: superiorYogaBanner,
    description: "Mindful movement and breathwork for body and spirit.",
    paragraphs: [
      "மேன்மையான யோகம் (Superior Yoga) என்பது யோகாவின் உயர்ந்த அல்லது ஆழ்ந்த நிலைகளை குறிக்கிறது. இது உடல் ஆரோக்கியத்தை மேம்படுத்துவது  மட்டுமல்லாமல், மனதை கட்டுப்படுத்துவதிலும், மூச்சுப் பயிற்சிகள், ஆழ்ந்த தியானம், மற்றும் சமாதி போன்ற பயிற்சிகளை மேற்கொள்வதன் மூலம், மனதின் கட்டுப்பாடை பெருக்கி, தன்னறிவையும் ஆன்மீக முன்னேற்றத்தையும் அடைய உதவுகிறது.",
      "இந்த யோகத்தில் பல்வேறு வழிமுறைகள் உள்ளன, அவற்றில் முக்கியமானவை குண்டலினி யோகம், ராஜ யோகம், அஷ்டாங்க யோகம் மற்றும் சித்தர் யோகம் ஆகும். குண்டலினி யோகம் உடலின் அடிப்பகுதியில் உறங்கிக் கிடக்கும் குண்டலினி சக்தியை எழுப்புவதில் கவனம் செலுத்துகிறது. ராஜ யோகம் தியானம் மற்றும் மனக்கட்டுப்பாட்டின் மூலம் ஆன்மிக முன்னேற்றத்தை அடைய உதவுகிறது, மற்றும் அஷ்டாங்க யோகம் பத்தஞ்சலியின் எட்டு படிகளின் அடிப்படையில் செயல்படுகிறது. தமிழ் சித்தர்களால் வழங்கப்பட்ட சித்தர் யோகம் உடல், மனம் மற்றும் ஆன்மாவை ஒருங்கிணைக்கும் பயிற்சியாக இருக்கிறது.",
      "தமிழ் பாரம்பரியத்தில், யோகம் ஆன்மீக வளர்ச்சிக்கான ஒரு வழியாக மட்டுமல்ல, வாழ்க்கையின் முழுமை நோக்கத்தை அடைவதற்கான ஒரு கருவியாகவும் கருதப்பட்டது. சித்தர் யோகம், அரிவியல் யோகம் என அறியப்படும் இந்த யோகங்கள் மூச்சுப் பயிற்சிகளின் மூலம் தெய்வீக சக்தியை உணர்வதற்கும், தியானத்தின் மூலம் தன்னடக்கம் வளர்ப்பதற்கும் உதவுகின்றன. மேன்மையான யோகத்தின் இறுதி நோக்கம் தன்னையும் பிரபஞ்ச சக்தியையும் ஒன்றாக உணர்ந்து, மன அமைதியை அடைவதாகும்.",
    ],
  };
  return (
    <main>
      <PanoramicBanner
        bgImg={resourceData?.banner}
        title={resourceData?.title}
      />
      <section className="bg-yellow-50 py-12">
        <div className="container">
          <h2 className="text-2xl font-bold text-emerald-600 px-4 mb-4">
            {resourceData?.title}
          </h2>
          <div className="px-4 text-md text-justify font-semibold indent-10 leading-normal text-red-500">
            {resourceData?.paragraphs.map((para, index) => (
              <p key={index} className="mb-5">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SuperiorYoga;
