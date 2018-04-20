package com.corusconsulting.template.utils;

import org.apache.log4j.DailyRollingFileAppender;
import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.log4j.PatternLayout;

public class LoggerUtil {

    private static Logger logger;

    public static Logger getLogger(Class klass){
        try{
            PatternLayout layout = new PatternLayout();
            String conversionPattern = "[%p] %d %c %M - %m%n";
            layout.setConversionPattern(conversionPattern);

            // creates daily rolling file appender
            DailyRollingFileAppender rollingAppender = new DailyRollingFileAppender();
            rollingAppender.setFile("Template.log");
            rollingAppender.setDatePattern("'.'yyyy-MM-dd");
            rollingAppender.setLayout(layout);
            rollingAppender.activateOptions();

            // configures the root logger
            Logger rootLogger = Logger.getRootLogger();
            rootLogger.setLevel(Level.DEBUG);
            rootLogger.addAppender(rollingAppender);

            // creates a custom logger and log messages
            logger = Logger.getLogger(klass.newInstance().getClass());
        }catch (Exception e){
            e.printStackTrace();
        }
        return logger;
    }
}
